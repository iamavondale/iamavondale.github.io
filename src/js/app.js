new TypeIt("#message", {
        speed: 50,
        startDelay: 900,
        deleteSpeed: 150
    })
    .type("Hi")
    .pause(1e3)
    .type(', I am <b class="name-color">Lasse Riemre</b>')
    .pause(1e3)
    .delete(6)
    .pause(1e3)
    .type('<b class="name-color">Reimer</b>').go();