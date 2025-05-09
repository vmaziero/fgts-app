import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import FGTSForm from './form/FgtsForm';
import * as validaService from '../services/validaTelefone';

jest.mock('../env', () => ({
  getApiKey: () => 'fake-api-key',
}));

jest.mock('../context/CalculoFgtsContext', () => ({
  useCalculoFgts: jest.fn(),
}));

jest.doMock('../hooks/useMask', () => ({
  useMask: () => ({
    value: '(11) 99999-9999',
    raw: '11999999999',
    onChange: jest.fn()
  })
}));

jest.mock('../services/validaTelefone', () => ({
  validaTelefone: jest.fn(),
}));


const mockSetCalculoFgts = jest.fn();

beforeEach(() => {
  require('../context/CalculoFgtsContext').useCalculoFgts.mockReturnValue({
    calculoFgts: {
      nome: 'João Silva',
      telefone: '11999999999',
      saldo: 1500,
      mes: 'Janeiro',
      saque: 500,
    },
    setCalculoFgts: mockSetCalculoFgts,
  });

  jest.clearAllMocks();
});

const setup = () => {
  return render(
    <MemoryRouter>
      <FGTSForm />
    </MemoryRouter>
  );
};

test('renderiza todos os campos do formulário', () => {
  setup();

  expect(screen.getByLabelText(/qual seu nome/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/qual seu telefone/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/qual seu saldo/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/qual seu mês de aniversário/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /ver proposta/i })).toBeInTheDocument();
});

test('valida se exibe alerta se a função validaTelefone retorna false', async () => {
  const user = userEvent.setup();

  (validaService.validaTelefone as jest.Mock).mockResolvedValue(false);
  jest.spyOn(window, 'alert').mockImplementation(() => {});

  setup();

  await user.type(screen.getByLabelText(/qual seu nome/i), 'Guilherme');
  await user.type(screen.getByLabelText(/qual seu telefone/i), '11999999999');
  await user.type(screen.getByLabelText(/qual seu saldo/i), '5000');

  fireEvent.change(screen.getByLabelText(/qual seu mês de aniversário/i), {
    target: { value: 'Janeiro' },
  });

  fireEvent.click(screen.getByRole('button', { name: /ver proposta/i }));

  await waitFor(() => {
    expect(validaService.validaTelefone).toHaveBeenCalledWith('+5511999999999');
    expect(window.alert).toHaveBeenCalledWith('Telefone inválido.');
  });
});

test('submete corretamente com dados válidos', async () => {
  const user = userEvent.setup();

  (validaService.validaTelefone as jest.Mock).mockResolvedValue(true);

  setup();

  await user.type(screen.getByLabelText(/qual seu nome/i), 'Marcos');
  await user.type(screen.getByLabelText(/qual seu telefone/i), '11987654321');
  await user.type(screen.getByLabelText(/qual seu saldo/i), '20000');

  fireEvent.change(screen.getByLabelText(/qual seu mês de aniversário/i), {
    target: { value: 'Maio' },
  });

  fireEvent.click(screen.getByRole('button', { name: /ver proposta/i }));

  await waitFor(() => {
    expect(validaService.validaTelefone).toHaveBeenCalledWith('+5511987654321');
    expect(mockSetCalculoFgts).toHaveBeenCalled();
  });
});
