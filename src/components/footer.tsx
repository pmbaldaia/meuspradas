function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className="footer-copyrights">
            <p>
                MEUSPRADAS.pt não se responsabiliza pela informação incorrecta sobre bónus, ofertas ou promoções constantes do site.
                MEUSPRADAS.pt recomenda que o jogador analise todos os termos e condições de todos os bônus listados no site do Casino.
            </p>
            <p>+18 | T&C APPLY | NEW CUSTOMERS ONLY </p>
            <p>&copy; {year} Meuspradas.pt. Todos os direitos reservados</p>
        </div>
    );
}

export default Footer;
