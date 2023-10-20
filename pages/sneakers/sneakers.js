export default () => {
    const container = document.querySelector('.main')
    const template = `  <div class="highlights">
                            <div class="hlTitle">
                            <h1>Destaques</h1>
                            </div>
                            <div class="hl">
                            <a href="">
                                <div class="hlProduct">
                                <div class="pic">
                                    <img
                                    src="https://cdn.flightclub.com/750/TEMPLATE/371551/1.jpg"
                                    alt="Satin Bred"
                                    />
                                </div>
                                <div class="name">
                                    <span>Air Jordan</span>
                                    <p>Wmns Air Jordan 1 Retro High OG 'Satin Bred' 2023</p>
                                </div>
                                </div>
                            </a>
                            <a href="">
                                <div class="hlProduct">
                                <div class="pic">
                                    <img
                                    src="https://cdn.flightclub.com/750/TEMPLATE/376331/1.jpg"
                                    alt="Faded Spruce"
                                    />
                                </div>
                                <div class="name">
                                    <span>Nike</span>
                                    <p>Cactus Plant Flea Market x Air Flea 2 'Faded Spruce'</p>
                                </div>
                                </div>
                            </a>
                            <a href="">
                                <div class="hlProduct">
                                <div class="pic">
                                    <img
                                    src="https://cdn.flightclub.com/750/TEMPLATE/376329/1.jpg"
                                    alt="Black Alabaster"
                                    />
                                </div>
                                <div class="name">
                                    <span>Nike</span>
                                    <p>Cactus Plant Flea Market x Air Flea 2 'Black Alabaster'</p>
                                </div>
                                </div>
                            </a>
                            <a href="">
                                <div class="hlProduct">
                                <div class="pic">
                                    <img
                                    src="https://cdn.flightclub.com/750/TEMPLATE/371719/1.jpg"
                                    alt="Mauve"
                                    />
                                </div>
                                <div class="name">
                                    <span>Air Jordan</span>
                                    <p>Air Jordan 1 Retro High OG 'Mauve'</p>
                                </div>
                                </div>
                            </a>
                            <a href="">
                                <div class="hlProduct">
                                <div class="pic">
                                    <img
                                    src="https://cdn.flightclub.com/750/TEMPLATE/374130/1.jpg"
                                    alt="Neutral Olive"
                                    />
                                </div>
                                <div class="name">
                                    <span>Air Jordan</span>
                                    <p>Travis Scott x Air Jordan 1 Low Golf 'Neutral Olive'</p>
                                </div>
                                </div>
                            </a>
                            <a href="">
                                <div class="hlProduct">
                                <div class="pic">
                                    <img
                                    src="https://cdn.flightclub.com/750/TEMPLATE/356780/1.jpg"
                                    alt="Aqua"
                                    />
                                </div>
                                <div class="name">
                                    <span>Air Jordan</span>
                                    <p>Air Jordan 6 Retro 'Aqua'</p>
                                </div>
                                </div>
                            </a>
                            <a href="">
                                <div class="hlProduct">
                                <div class="pic">
                                    <img
                                    src="https://cdn.flightclub.com/750/TEMPLATE/345070/1.jpg"
                                    alt="Playoff 2023"
                                    />
                                </div>
                                <div class="name">
                                    <span>Air Jordan</span>
                                    <p>Air Jordan 8 Retro 'Playoff' 2023</p>
                                </div>
                                </div>
                            </a>
                            <a href="">
                                <div class="hlProduct">
                                <div class="pic">
                                    <img
                                    src="https://cdn.flightclub.com/750/TEMPLATE/355545/1.jpg"
                                    alt="One Block at a Time"
                                    />
                                </div>
                                <div class="name">
                                    <span>Nike</span>
                                    <p>Born x Raised x Dunk Low SB<br />'One Block at a Time'</p>
                                </div>
                                </div>
                            </a>
                            </div>
                            <div class="hlbutton">
                            <a class="more"><strong>Ver Mais</strong></a>
                            </div>
                        </div>`
    container.innerHTML = template
    return container
}