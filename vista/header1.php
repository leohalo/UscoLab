   <!DOCTYPE html>
    <!--[if lt IE 7 ]> <html lang="es" class="no-js ie6"> <![endif]-->
    <!--[if IE 7 ]>    <html lang="es" class="no-js ie7"> <![endif]-->
    <!--[if IE 8 ]>    <html lang="es" class="no-js ie8"> <![endif]-->
    <!--[if IE 9 ]>    <html lang="es" class="no-js ie9"> <![endif]-->
    <!--[if (gt IE 9)|!(IE)]><!-->
    <html lang="es" class="no-js">
    <!--<![endif]-->

    <APM_DO_NOT_TOUCH>
        <script type="text/javascript">
            //<![CDATA[
            (function() {

                window.oLC = !!window.oLC;
                try {
                    (function() {
                        try {
                            var jI, lI, OI = 1,
                                sI = 1;
                            for (var _I = 0; _I < lI; ++_I) OI += 2, sI += 3;
                            jI = OI + sI;
                            window.II === jI && (window.II = ++jI)
                        } catch (iI) {
                            window.II = jI
                        }
                        var Jj = !0;

                        function sj(I) {
                            I && (Jj = !1);
                            return Jj
                        }

                        function ij() {}
                        sj(window[ij.name] === ij);
                        sj("function" !== typeof ie9rgb4);
                        sj(/\x3c/.test(function() {
                            return "\x3c"
                        }) & !/x3d/.test(function() {
                            return "'x3'+'d';"
                        }));
                        var IJ = window.attachEvent || /mobi|android/i.test(window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),
                            jJ = +new Date + 6E5,
                            LJ, OJ, _J = setTimeout,
                            Il = IJ ? 3E4 : 6E3;

                        function jl() {
                            if (!document.querySelector) return !0;
                            var I = +new Date,
                                L = I > jJ;
                            if (L) return sj(!1);
                            L = OJ && LJ + Il < I;
                            L = sj(L);
                            LJ = I;
                            OJ || (OJ = !0, _J(function() {
                                OJ = !1
                            }, 1));
                            return L
                        }
                        jl();
                        var Jl = [17795081, 27611931586, 1558153217];

                        function ol(I) {
                            I = "string" === typeof I ? I : I.toString(36);
                            var L = window[I];
                            if (!L.toString) return;
                            var z = "" + L;
                            window[I] = function(I, z) {
                                OJ = !1;
                                return L(I, z)
                            };
                            window[I].toString = function() {
                                return z
                            }
                        }
                        for (var Ol = 0; Ol < Jl.length; ++Ol) ol(Jl[Ol]);
                        sj(!1 !== window.oLC);
                        (function sl() {
                            if (!jl()) return;
                            var L = !1;

                            function z(L) {
                                for (var z = 0; L--;) z += s(document.documentElement, null);
                                return z
                            }

                            function s(L, z) {
                                var Z = "vi";
                                z = z || new S;
                                return oI(L, function(L) {
                                    L.setAttribute("data-" + Z, z.JO());
                                    return s(L, z)
                                }, null)
                            }

                            function S() {
                                this.Jl = 1;
                                this.Il = 0;
                                this.jI = this.Jl;
                                this.Lj = null;
                                this.JO = function() {
                                    this.Lj = this.Il + this.jI;
                                    if (!isFinite(this.Lj)) return this.reset(), this.JO();
                                    this.Il = this.jI;
                                    this.jI = this.Lj;
                                    this.Lj = null;
                                    return this.jI
                                };
                                this.reset = function() {
                                    this.Jl++;
                                    this.Il = 0;
                                    this.jI = this.Jl
                                }
                            }
                            var _ = !1;

                            function Z(L, z) {
                                if (!jl()) return;
                                var Z = document.createElement(L);
                                z = z || document.body;
                                z.appendChild(Z);
                                Z && Z.style && (Z.style.display = "none");
                                jl()
                            }

                            function LI(z, Z) {
                                if (!jl()) return;
                                Z = Z || z;
                                var s = "|";

                                function S(L) {
                                    L = L.split(s);
                                    var z = [];
                                    for (var Z = 0; Z < L.length; ++Z) {
                                        var _ = "",
                                            JI = L[Z].split(",");
                                        for (var LI = 0; LI < JI.length; ++LI) _ += JI[LI][LI];
                                        z.push(_)
                                    }
                                    return z
                                }
                                var LI = 0,
                                    oI = "datalist,details,embed,figure,hrimg,strong,article,formaddress|audio,blockquote,area,source,input|canvas,form,link,tbase,option,details,article";
                                oI.split(s);
                                oI = S(oI);
                                oI = new RegExp(oI.join(s), "g");
                                while (oI.exec(z)) oI = new RegExp(("" + new Date)[8], "g"), L && (_ = Jj), ++LI;
                                return jl() ? Z(LI && 1) : void 0
                            }

                            function oI(L, z, s) {
                                if (!jl()) return;
                                (s = s || _) && Z("div", L);
                                L = L.children;
                                var S = 0;
                                for (var LI in L) {
                                    s = L[LI];
                                    try {
                                        s instanceof HTMLElement && (z(s), ++S)
                                    } catch (oI) {}
                                }
                                return jl() ? S : void 0
                            }
                            LI(sl, z);
                            jl()
                        })();
                        var Sl = 82;
                        window.Sj = {
                            SJ: "08dde6844481b800f4e17086c5e17d96ad6b7093a12742162020e170731445361667ed0e0db6a09d1d7eec762dbe88a64ab67405f3dab513110873d012bbd89d140e3527d0b136a5646a0742b57c5eeaaaa0e7c9d9cf4d455a6dd59208999de7238949a7fbf86d9b10bf722d14cf996d80ec4e56190b04c71e1763ec6e286f4b87c9377c97900358a4556dd3a36153ffcb13f9c4ddcd50b96fcd54baed5fdd93730d7524c8f015c0723b3ac871ba93daba0565eb143bb64561a14dfeb0171233"
                        };

                        function J(I) {
                            return 97 > I
                        }

                        function l(I) {
                            var L = arguments.length,
                                z = [];
                            for (var s = 1; s < L; ++s) z.push(arguments[s] - I);
                            return String.fromCharCode.apply(String, z)
                        }

                        function O(I, L) {
                            I += L;
                            return I.toString(36)
                        }(function il(L) {
                            return L ? 0 : il(L) * il(L)
                        })(jl());
                    })();
                } catch (x) {} finally {
                    ie9rgb4 = void(0);
                };

                function ie9rgb4(a, b) {
                    return a >> b >> 0
                };

            })();

            //]]>
        </script>
    </APM_DO_NOT_TOUCH>
    <script type="text/javascript" src="/TSbd/0808b92153ab2000f4d1552546508d5734edfb3b522b2aba26aa30c41a379b2db739b39dcd0af2df?type=3"></script>

    <head>




        <meta charset="UTF-8">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Portal Universitario :: Universidad Surcolombiana</title>
        <meta name="description" content="Universidad Surcolombiana, Institución de Educación Superior, Neiva, Huila, Colombia">
        <meta name="author" content="CTIC - Centro de Tecnologías de Información y Comunicaciones, Universidad Surcolombiana">
        <meta name="subject" CONTENT="Universidad Surcolombiana, Institución de Educación Superior, Neiva, Huila, Colombia">
        <meta name="Description" CONTENT="Universidad Surcolombiana, Institución de Educación Superior, Neiva, Huila, Colombia">
        <meta name="Keywords" CONTENT="Universidad Surcolombiana, Institución de Educación Superior, Neiva, Huila, Colombia, Facultad de Ciencias Exactas y Naturales, Facultad de Ciencias Sociales y Humanas, Facultad de Ciencias Jurídicas y Políticas, Facultad de Economía y Administración, Facultad de Educación, Facultad de Salud, Facultad de Ingeniería.">
        <meta name="Geography" CONTENT="Neiva, Huila, Colombia">
        <meta name="Language" CONTENT="Español">

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />

        <meta http-equiv="cache-control" content="max-age=0" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
        <meta http-equiv="pragma" content="no-cache" />

        <!--<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"/>-->

        <link rel="shortcut icon" href="https://www.usco.edu.co/imagen-institucional/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="https://www.usco.edu.co/imagen-institucional/icons/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="https://www.usco.edu.co/imagen-institucional/icons/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="https://www.usco.edu.co/imagen-institucional/icons/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="https://www.usco.edu.co/imagen-institucional/icons/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="https://www.usco.edu.co/imagen-institucional/icons/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="https://www.usco.edu.co/imagen-institucional/icons/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="https://www.usco.edu.co/imagen-institucional/icons/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="https://www.usco.edu.co/imagen-institucional/icons/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://www.usco.edu.co/imagen-institucional/icons/apple-touch-icon-180x180.png" />

        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300i,700" rel="stylesheet">


        <link rel="stylesheet" href="resources/css/bootstrap-datepicker3.css">
        <link rel="stylesheet" href="resources/css/reset.css" type="text/css">
        <link rel="stylesheet" href="resources/css/estilo_usco.css" type="text/css">
        <link rel="stylesheet" href="resources/css/menu.css" type="text/css">
        <link rel="stylesheet" href="resources/css/extras.css" type="text/css">
        <link rel="stylesheet" href="resources/css/estilo_calendario.css" type="text/css">
        <link rel="stylesheet" href="resources/css/owl.carousel.min.css" type="text/css">
        <link rel="stylesheet" href="resources/css/owl.theme.default.css" type="text/css">
        <link rel="stylesheet" href="resources/css/owl.carousel.usco.css" type="text/css">
        <link rel="stylesheet" href="bootstrap-3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="bootstrap-3.3.7/css/csscustom.css">
        <link rel="stylesheet" href="plugins/datatables/dataTables.bootstrap.css" type="text/css" />

        <link rel="stylesheet" href="plugins/datepicker/datepicker3.css">



        <script type="text/javascript" src="resources/js/jquery.min.js"></script>
        <script type="text/javascript" src="resources/js/interfaz.js"></script>
        <script type="text/javascript" src="resources/js/owl.carousel.js"></script>
        <script type="text/javascript" src="resources/js/owl.config.js"></script>
        <script type="text/javascript" src="resources/js/anuncio.js"></script>
        <script type="text/javascript" src="resources/js/modernizr-2.8.3.min.js"></script>
        <script type="text/javascript" src="resources/js/styleswitch.js"></script>
        <script type="text/javascript" src="resources/js/extras.js"></script>
        <script type="text/javascript" src="resources/js/angular.min.js"></script>
        <script type="text/javascript" src="resources/js/app.js"></script>
        <script type="text/javascript" src="resources/js/jquery-ui.js"></script>
        <script type="text/javascript" src="resources/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="resources/libs/ui-bootstrap/2.3.0/ui-bootstrap-tpls.js"></script>
        <script type="text/javascript" src="resources/js/bootstrap-datepicker.min.js"></script>
        <script type="text/javascript" src="resources/js/bootstrap-datepicker.eu.min.js"></script>
        <script type="text/javascript" src="resources/js/bootstrap-datepicker.es.min.js"></script>
        <script type="text/javascript" src="resources/js/calendar.js"></script>

        <link rel="alternate stylesheet" type="text/css" title="verde" href="/resources/css/col_verde.css">
        <link rel="alternate stylesheet" type="text/css" title="blanco" href="/resources/css/col_blanco.css">
        <link rel="alternate stylesheet" type="text/css" title="azul" href="/resources/css/col_azul.css">
        <link rel="alternate stylesheet" type="text/css" title="morado" href="/resources/css/col_morado.css">
        <link rel="alternate stylesheet" type="text/css" title="cyan" href="/resources/css/col_cyan.css">
        <link rel="alternate stylesheet" type="text/css" title="negro" href="/resources/css/col_negro.css">

        <script type="text/javascript" id='color_js' src='/resources/js/color.js?color=none'></script>

        <!-- Global Site Tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-85010356-2"></script>
        <script>
            window.dataLayer = window.dataLayer || [];

            function gtag() {
                dataLayer.push(arguments)
            };
            gtag('js', new Date());

            gtag('config', 'UA-85010356-2');
        </script>



    </head>

    <body>






        <header class="all header" style="display: flex;justify-content: space-around;flex-wrap: wrap;">
            <figure class="figure col"><img src="resources/images/republica-de-colombia.png" id="idEscudo" name="idEscudo" alt="República de Colombia" title="República de Colombia"></figure>
            <figure class="figure"><a href="/es/" title="Universidad Surcolombiana" style="display: block;"><img src="https://www.usco.edu.co/imagen-institucional/ocre/universidad-surcolombiana.png" id="idLogo" name="idLogo" alt="Universidad Surcolombiana"></a></figure>
            <img src="resources/images/acreditacion-usco.png" id="idAcreditacion" name="idAcreditacion">
            <div class="centro" style="margin-top: 2rem; width: 100%;">
                <div class="iz imagbn">
                    <a href="/en/" title="Versión en Ingles" class="ing"><img src="resources/images/ban_ingles.png" alt="Versión en Ingles"></a> |
                    <a href="/es/" title="Versión en Español" class="ing"><img src="resources/images/ban_espanol.png" alt="Versión en Español"></a>
                </div>
                <div class="dr panel">

                    

                    <a href="../controlador/logout.php" title="Cerrar sesion" class="directo">

                        <span><img src="resources/images/ico/candado.png" alt="Cerrar sesion"></span>
                    </a>

                    <a href="reserva2.php" title="Buscar" class="directo">

                        <span><img src="resources/images/ico/buscar.png" alt="Buscar"></span>
                    </a>


                    <a href="misreservas.php" title="Mis reservas" class="js estilos">

                        <span><img src="resources/images/ico/brocha.png" alt="Mis reservas"></span>
                    </a>

                    
                </div>
            </div>
            <div class="sello-acreditacion">

            </div>
        </header>