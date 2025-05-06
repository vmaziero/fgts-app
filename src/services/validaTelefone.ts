export async function validaTelefone(telefone: string): Promise<boolean> {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://phonevalidation.abstractapi.com/v1/?api_key=${apiKey}&phone=${telefone}&country_code=BR`;

    console.log(apiKey);

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(apiKey);
        
        return data.valid === true;
    } catch (error) {
        console.error('Telefone inválido', error);
        console.log(apiKey);
        return false;
    }
    
}