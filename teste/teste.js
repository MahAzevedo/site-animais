// Mostre os dados da aplicação, como apresentado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem



const App = () => {
    const estiloH1 = {
        color: 'blue',
        fontSize: '20px',
        fontFamily: 'Helvetica',
    };

    return (
        <div>
            <h1 style={estiloH1}>Empresa</h1>
            <p style={{ color: 'green' }}>Sempre aberta</p>
        </div>
    )
};