import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FGTSForm from './form/FgtsForm';
import { useCalculoFgts } from '../context/CalculoFgtsContext';
import * as validaService from '../services/validaTelefone';

jest.mock('../../context/CalculoFgtsContext', () => ({
  useCalculoFgts: jest.fn(),
}));

jest.mock('../../hooks/useMask', () => ({
  useMask: (formatter: any) => ({
    value: '',
    raw: '',
    onChange: jest.fn()
  }),
}));

jest.mock('../../services/validaTelefone');

const mockSetCalculoFgts = jest.fn();

beforeEach(() => {
  (useCalculoFgts as jest.Mock).mockReturnValue({
    setCalculoFgts: mockSetCalculoFgts
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

test('exibe alerta se o telefone for inválido', async () => {
  jest.spyOn(validaService, 'validaTelefone').mockResolvedValue(false);
  jest.spyOn(window, 'alert').mockImplementation(() => {});

  setup();

  fireEvent.change(screen.getByLabelText(/qual seu nome/i), { target: { value: 'Guilherme' } });
  fireEvent.change(screen.getByLabelText(/qual seu telefone/i), { target: { value: '(11) 99999-9999' } });
  fireEvent.change(screen.getByLabelText(/qual seu saldo/i), { target: { value: 'R$ 1.000,00' } });
  fireEvent.change(screen.getByLabelText(/qual seu mês de aniversário/i), { target: { value: 'Janeiro' } });

  fireEvent.click(screen.getByRole('button', { name: /ver proposta/i }));

  await waitFor(() => {
    expect(validaService.validaTelefone).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Telefone inválido.');
  });
});

test('submete corretamente com dados válidos', async () => {
  jest.spyOn(validaService, 'validaTelefone').mockResolvedValue(true);

  setup();

  fireEvent.change(screen.getByLabelText(/qual seu nome/i), { target: { value: 'Marcos' } });
  fireEvent.change(screen.getByLabelText(/qual seu telefone/i), { target: { value: '(11) 98765-4321' } });
  fireEvent.change(screen.getByLabelText(/qual seu saldo/i), { target: { value: 'R$ 20.000,00' } });
  fireEvent.change(screen.getByLabelText(/qual seu mês de aniversário/i), { target: { value: 'Maio' } });

  fireEvent.click(screen.getByRole('button', { name: /ver proposta/i }));

  await waitFor(() => {
    expect(validaService.validaTelefone).toHaveBeenCalled();
    expect(mockSetCalculoFgts).toHaveBeenCalled();
  });
});
