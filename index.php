<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Hotel Paraíso das Águas | Sempre sendo a melhor escolha!">
    <title>Hotel Paraíso das Águas</title>
    <link rel="shortcut icon" href="src/imagens/logo_favicon_no_bg_circled.png" type="image/x-icon">
    <link rel="stylesheet" href="src/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>
<body>
    <header>
        <nav>
            <div class="nav-title">
                <h1>Hotel Paraíso das Águas</h1>
            </div>
            
            <div class="menu-icon">
                <i class="fas fa-bars"></i>
            </div>
            
            <div class="nav-links">
                <a href="#reserve">Reservar</a>
                <a href="#sobre">Sobre</a>
                <a href="#localizacao">Localização</a>
                <a href="#contato">Contato</a>
            </div>
        </nav>
    </header>

    <main>
        <section class="img-g">
            <div class="slogan animate">
                <h2>Bem-vindo</h2>
                <p>A combinação perfeita de luxo e hospitalidade em um só lugar.</p>
            </div>
        </section>
        <section id="reserve">
            <form class="rooms" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']) ?>" method="post">
                <div class="reserve-title-div">
                    <h2>Quartos & Taxas <i class="fas fa-check-circle"></i></h2>
                </div>
                    <div>
                        <label for="people">Número de pessoas</label>
                        <select name="people" id="amount">
                            <option value="1" selected>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    
                    </div>
                    <div>
                        <label for="check-in">Check-in</label>
                        <input type="date" name="check-in" id="check-in"  placeholder="dd/mm/aaaa" pattern="\d{2}/\d{2}/\d{4}" maxlength="10" required>
                    </div>
                    <div>
                        <label for="check-out">Check-out</label>
                        <input type="date" name="check-out" id="check-out"  placeholder="dd/mm/aaaa" pattern="\d{2}/\d{2}/\d{4}" maxlength="10" required>
                    </div>
                    <div>
                        <input type="submit" value="Pesquisar">
                    </div>
                </div>
            </form>
            <div>
                <?php

                    echo $_POST['people'];
                    echo '<br>';
                    echo $_POST['check-in'];
                    echo '<br>';
                    echo $_POST['check-out'];



                ?>
            </div>
        </section>
        <section class="about" id="sobre">
            <div class="about-item">
                <div class="about-text">
                    <h1>Sobre o Hotel</h1>
                    <p>Descubra o Paraíso das Águas, um refúgio perfeito para relaxar e renovar suas energias. Desfrute de acomodações confortáveis, vistas deslumbrantes e um atendimento impecável. Seja para uma escapada romântica ou férias em família, aqui você encontrará a tranquilidade e o conforto que merece. Reserve já! lor</p>      
                </div>
                <div class="about-img">
                    <picture>
                        <source media="(max-width: 600px)" srcset="src/imagens/s-pool.jpg">

                        <img src="src/imagens/hotel.jpg" alt="">
                    </picture>
                </div>
            </div>
            
            <div class="facilities">
                <h2>Nós oferecemos</h2>
                  <div class="facil-container" id="facilities">
                    <div class="facil-item" >
                        <i class="fas fa-swimming-pool" id="pool"></i>
                        <h4>Piscina</h4>

                    </div>
                    <div class="facil-item" >
                        <i class="fas fa-wifi" id="wifi"></i>
                        <h4>Wi-fi Grátis</h4>
                        <!--<h4 class="info">Nosso Wi-fi pega em todo o espaço</h4>-->
                    </div>
                    <div class="facil-item" >
                        <i class="fas fa-spa" id="spa"></i>
                        <h4>Spa</h4>
                        <!--<h4 class="info">Todo mundo merece um Spa como esse...</h4>-->
                    </div>
                    <div class="facil-item" >
                        <i class="fas fa-square-parking" id="parking"></i>
                        <h4>Estacionamento</h4>
                        <!--<h4 class="info">O estacionamento é espaçoso e seguro para todos os veículos.</h4>-->
                    </div>
                    <div class="facil-item" >
                        <i class="fas fa-coffee" id="coffee"></i>
                        <h4>Café da manhã</h4>
                        <!--<h4 class="info">O nosso café da manhã é realmente divino, nem os maiores reis poderiam ter</h4>-->
                    </div>
                    <div class="facil-item" >
                        <i class="fas fa-gamepad" id="games"></i>
                        <h4>Sala de jogos</h4>
                        <!--<p class="info">Um pouco de diversão? Por que não?</p>-->

                    </div>
                </div>
                
            </div>
        </section>
        
        <section class="location" id="localizacao">
            <div class="location-text">
                <h2><i class="fas fa-map-location-dot "></i> Localização Privilegiada</h2>
                <p>Situado em uma localização privilegiada, o Hotel Paraíso das Águas está próximo das principais atrações turísticas, centros de compras e áreas de negócios da cidade, proporcionando facilidade de acesso para todos os hóspedes.</p>     
            </div>
            <div class="map">
                <iframe class="responsive-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14692.455730672265!2d-43.21793577177802!3d-22.98283753322829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd523d20f9c53%3A0x693c6132635e6b0d!2sCopacabana%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1726435224936!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>  
        </section>
        
        <section id="contato">
            <div class="reserve-title-div">
                <h2>Entre em contato</h2>
                <h3>informe-se conosco</h3>
            </div>
            <div id="formplace">
                <form action="">
                    <fieldset>
                        <div class="form-item">
                            <label for="nome">Nome</label>
                            <input name="nome" id="nome" autocomplete="name"  required>
                        </div>
                        <div class="form-item">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" autocomplete="email" required>
                        </div>
                        <div class="form-item">
                            <label for="phone">Telefone</label>
                            <input type="tel" name="phone" id="phone" autocomplete="tel" placeholder="(DDD) xxxx-xxxx" required>
                        </div>               
                        <div class="form-item">
                            <label for="assunto">assunto</label>
                            <input id="assunto">
                        </div>
                        <div class="form-item">
                            <label for="textmsg">Digite sua mensagem aqui</label>
                            <textarea name="textmsg" id="textmsg" required></textarea>
                            <input type="submit" value="Enviar">
                        </div>
                        
                    </fieldset>
                </form>
            </div>
        </section>
    </main>
    
    <footer>
        <div class="footer-item">
            <div class="footer-logo">
                <h2>Hotel Paraíso das Águas</h2>
                <img src="src/imagens/logo_favicon_no_bg_circled.png" alt="" width="200">
                <p class="tagline"></p> <!-- Added tagline -->
            </div>

        </div>
        <div class="footer-item">
            <div class="footer-contact">
                <h3>Contato</h3>
                <ul>
                    <li><i class="fa-solid fa-phone"></i> (41) 3450-0601</li> <!-- Added icon -->
                    <li><i class="fa-solid fa-envelope"></i> contato@hotelpda.com.br</li> <!-- Added icon -->
                    <li><i class="fa-solid fa-envelope"></i> suporte@hotelpda.com.br</li> <!-- Added icon -->
                    <li><i class="fa-solid fa-location-dot"></i> Rua São Celestino Nº 95</li> <!-- Added icon -->
                    <li><i class="fa-brands fa-whatsapp"></i> WhatsApp: (41) 91234-5678</li> <!-- Added WhatsApp -->
                </ul>
                <p class="operating-hours"><i class="fa-solid fa-clock"></i> Horário de funcionamento: Segunda-Sábado, 8:30 - 20:00</p>
            </div>
        </div>
        <div class="footer-item">
            <h3>Follow us</h3>
            <ul class="social-media">
                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-threads"></i></a></li>
            </ul>
            <!--
            <a href="#" class="newsletter-signup">Sign up for our newsletter</a>  Added newsletter signup 
            <a href="#" class="special-offers">Check out our special offers!</a>  Added special offers link -->
        </div>
        <small>&copy; Todos os direitos reservados <br> Desenvolvido por <a href="https://github.com/JuanCorreadeSaRibas" target="_blank" rel="noopener author">  Juan Correa de Sá Ribas</a> <i class="fa-brands fa-github"></i> </small>
    </footer>
    
    <script defer src="src/js/script.js"></script>
</body>
</html>