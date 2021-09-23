/ * ================================================ =========
 * bootstrap-datepicker.js
 * Repo: https://github.com/uxsolutions/bootstrap-datepicker/
 * Demostración: https://eternicode.github.io/bootstrap-datepicker/
 * Documentos: https://bootstrap-datepicker.readthedocs.org/
 * ================================================= ========
 * Licenciado bajo la Licencia Apache, Versión 2.0 (la "Licencia");
 * No puede usar este archivo, excepto en cumplimiento con la Licencia.
 * Puede obtener una copia de la licencia en
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * A menos que sea requerido por la ley aplicable o acordado por escrito, software
 * distribuido bajo la Licencia se distribuye "TAL CUAL",
 * SIN GARANTÍAS O CONDICIONES DE NINGÚN TIPO, ya sea expresa o implícita.
 * Consulte la Licencia para el idioma específico que rige los permisos y
 * Limitaciones bajo la Licencia.
* ================================================= ======== */

( función ( fábrica ) {
    if ( typeof define ===  ' function '  &&  define . amd ) {
        define ([ ' jquery ' ], factory);
    } Demás  si ( typeof  exportaciones  ===  ' objeto ' ) {
        fábrica ( requiere ( ' jquery ' ));
    } else {
        fábrica (jQuery);
    }
} ( función ( $ , indefinido ) {
	función  UTCDate () {
		devolver  nueva  Fecha ( Fecha . UTC . aplicar ( Fecha , argumentos ));
	}
	función  UTCToday () {
		var today =  new  Date ();
		devolver  UTCDate ( hoy . getFullYear (), hoy . getMonth (), hoy . getDate ());
	}
	función  isUTCEquals ( fecha1 , fecha2 ) {
		volver (
			fecha1 . getUTCFullYear () ===  date2 . getUTCFullYear () &&
			fecha1 . getUTCMonth () ===  date2 . getUTCMonth () &&
			fecha1 . getUTCDate () ===  date2 . getUTCDate ()
		);
	}
	 alias de función ( método , deprecationMsg ) {
		 función de retorno () {
			if (deprecationMsg ! ==  undefined ) {
				$ . fn . Selector de fechas . en desuso (deprecationMsg);
			}

			devuelve  este [método]. aplicar ( esto , argumentos );
		};
	}
	function  isValidDate ( d ) {
		volver d &&  ! isNaN ( d . getTime ());
	}

	var DateArray = ( function () {
		var extras = {
			obtener :  función ( i ) {
				devolver  este . rebanada (i) [ 0 ];
			}
			contiene :  función ( d ) {
				// Array.indexOf no es un navegador cruzado;
				// $ .inArray no funciona con fechas
				var val = d &&  d . valueOf ();
				para ( var i = 0 , l = esta . longitud ; i < l; i ++ )
          // Usar aritmética de fechas para permitir que coincidan fechas con diferentes horas
          if ( 0  <=  this [i]. valueOf () - val &&  this [i]. valueOf () - val <  1000 * 60 * 60 * 24 )
						regreso i;
				retorno  - 1 ;
			}
			eliminar :  función ( i ) {
				esta . empalme (i, 1 );
			}
			reemplazar :  función ( new_array ) {
				if ( ! new_array)
					volver ;
				if ( ! $ . isArray (new_array))
					new_array = [new_array];
				esta . claro ();
				esta . empujar . aplicar ( esto , new_array);
			}
			clear :  function () {
				esta . longitud  =  0 ;
			}
			copiar :  función () {
				var a =  new  DateArray ();
				una . reemplazar ( este );
				devuelve un
			}
		};

		 función de retorno () {
			var a = [];
			una . empujar . aplicar (a, argumentos );
			$ . extender (a, extras);
			devuelve un
		};
	}) ();


	// objeto selector

	var  Datepicker  =  function ( elemento , opciones ) {
		$ . datos (elemento, ' datepicker ' , este );
    
		esta . eventos  = [];
		esta . _secondaryEvents  = [];
    
		esta . _process_options (opciones);

		esta . dates  =  new  DateArray ();
		esta . viewDate  =  esto . o . defaultViewDate ;
		esta . focusDate  =  null ;

		esta . elemento  =  $ (elemento);
		esta . isInput  =  esto . elemento . es ( ' entrada ' );
		esta . inputField  =  esto . isInput  ?  esta . Elemento  :  este . elemento . encontrar ( ' entrada ' );
		esta . componente  =  esto . elemento . hasClass ( ' date ' ) ?  esta . elemento . find ( ' .add-on, .input-group-addon, .btn ' ) :  false ;
		if ( this . component  &&  this . component . length  ===  0 )
			esta . componente  =  falso ;
		esta . isInline  =  ! esta . componente  &&  esto . elemento . es ( ' div ' );

		esta . selector  =  $ ( plantilla DPGlobal . );

		// Comprobando plantillas e insertando
		if ( this . _check_template ( this . o . templates . leftArrow )) {
			esta . selector . buscar ( ' .prev ' ). html ( este . o . templates . leftArrow );
		}

		if ( this . _check_template ( this . o . templates . rightArrow )) {
			esta . selector . encontrar ( ' .next ' ). html ( este . o . templates . rightArrow );
		}

		esta . _buildEvents ();
		esta . _attachEvents ();

		if ( this . isInline ) {
			esta . selector . addClass ( ' datepicker-inline ' ). appendTo ( este . elemento );
		}
		else {
			esta . selector . addClass ( ' datepicker-dropdown-menu desplegable ' );
		}

		si ( esto . o . rtl ) {
			esta . selector . addClass ( ' datepicker-rtl ' );
		}

		si ( este . o . calendarWeeks ) {
			esta . selector . buscar ( ' .datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear ' )
				. attr ( ' colspan ' , función ( i , val ) {
					 Número de retorno (val) +  1 ;
				});
		}

		esta . _process_options ({
			fecha de inicio :  esto . _o . startDate ,
			endDate :  esto . _o . endDate ,
			daysOfWeekDisabled :  esto . o . daysOfWeekDisabled ,
			daysOfWeekHighlighted :  this . o . díasde la semana resaltados ,
			datesDisabled :  esto . o . fechas deshabilitadas
		});

		esta . _allow_update  =  false ;
		esta . setViewMode ( este . o . startView );
		esta . _allow_update  =  true ;

		esta . fillDow ();
		esta . fillMonths ();

		esta . actualizar ();

		if ( this . isInline ) {
			esta . show ();
		}
	};

	Selector de fechas . prototipo  = {
		constructor : Selector de fechas,

		_resolveViewName: function ( ver ) {
			$ . cada ( DPGlobal . viewModes , función ( i , viewMode ) {
				if (view === i ||  $ . inArray (view, viewMode . names ) ! ==  - 1 ) {
					vista = i;
					volver  falsa ;
				}
			});

			vista de vuelta
		}

		_resolveDaysOfWeek :  function ( daysOfWeek ) {
			if ( ! $ . isArray (daysOfWeek))
				daysOfWeek =  daysOfWeek . dividir ( / [, \ s ] * / );
			devuelve  $ . mapa (daysOfWeek, Number );
		}

		_check_template :  function ( tmp ) {
			prueba {
				// si esta vacío
				if (tmp ===  undefined  || tmp ===  " " ) {
					volver  falsa ;
				}
				// Si no hay html, todo ok
				if (( tmp . match ( / [<>] / g ) || []). longitud  <=  0 ) {
					volver  verdadera ;
				}
				// Comprobando si html está bien
				var jDom =  $ (tmp);
				devuelve  jDom . longitud  >  0 ;
			}
			atrapar (ex) {
				volver  falsa ;
			}
		}

		_process_options :  function ( opts ) {
			// Almacenar opciones en bruto para referencia
			esta . _o  =  $ . extender ({}, este . _o , opta);
			// Opciones procesadas
			var o =  esto . o  =  $ . extender ({}, este . _o );

			// Compruebe si la fecha del estilo "de-DE" está disponible, si no es el idioma
			// retroceder al código de 2 letras, por ejemplo, "de"
			var lang =  o . lenguaje ;
			si ( ! fechas [lang]) {
				lang =  lang . dividir ( ' - ' ) [ 0 ];
				si ( ! fechas [lang])
					lang = por  defecto . lenguaje ;
			}
			o . idioma  = lang;

			// Recuperar el índice de vista de cualquier alias
			o . startView  =  esto . _resolveViewName ( o . startView );
			o . minViewMode  =  esto . _resolveViewName ( o . minViewMode );
			o . maxViewMode  =  esto . _resolveViewName ( o . maxViewMode );

			// La vista de verificación está entre min y max
			o . startView  =  Matemáticas . max ( este . o . minViewMode , Math . min ( este . o . maxViewMode , o . startView ));

			// verdadero, falso o número> 0
			if ( o . multidate  ! ==  true ) {
				o . multidate  =  Número ( o . multidate ) ||  falsa ;
				if ( o . multidate  ! ==  false )
					o . multidate  =  matemáticas . max ( 0 , o . multidate );
			}
			o . multidateSeparator  =  String ( o . multidateSeparator );

			o . weekStart  % =  7 ;
			o . weekEnd  = ( o . weekStart  +  6 ) %  7 ;

			formato var =  DPGlobal . parseFormat ( formato o . );
			if ( o . startDate  ! ==  - Infinito ) {
				if ( !! o . startDate ) {
					if ( o . startDate  instanceof  Date )
						o . startDate  =  esto . _local_to_utc ( this . _zero_time ( o . startDate ));
					más
						o . Fecha de inicio  =  DPGlobal . parseDate ( o . startDate , format, o . language , o . asumiendoAyer por año );
				}
				else {
					o . fecha de inicio  =  - Infinito ;
				}
			}
			if ( o . endDate  ! ==  Infinity ) {
				if ( !! o . endDate ) {
					if ( o . endDate  instanceof  Date )
						o . endDate  =  esto . _local_to_utc ( this . _zero_time ( o . endDate ));
					más
						o . endDate  =  DPGlobal . parseDate ( o . endDate , format, o . language , o . asumiendoAyer por año );
				}
				else {
					o . endDate  =  Infinity ;
				}
			}

			o . daysOfWeekDisabled  =  esto . _resolveDaysOfWeek ( o . daysOfWeekDisabled || []);
			o . daysOfWeekHighlighted  =  this . _resolveDaysOfWeek ( o . daysOfWeekHighlighted || []);

			o . datesDisabled  =  o . fechas deshabilitadas || [];
			if ( ! $ . isArray ( o . datesDisabled )) {
				o . datesDisabled  =  o . Fechas deshabilitadas . dividir ( ' , ' );
			}
			o . datesDisabled  =  $ . mapa ( o . fechas deshabilitadas , función ( d ) {
				volver  DPGlobal . parseDate (d, formato, o . idioma , o . asumiendoAyer por año );
			});

			var plc =  cadena ( o . orientación ). toLowerCase (). dividir ( / \ s + / g ),
				_plc =  o . la orientación . toLowerCase ();
			plc =  $ . grep (plc, función ( palabra ) {
				volver / ^ auto | izquierda | la derecha | la parte superior | abajo $ / . prueba (palabra); 
			});
			o . orientación  = {x :  ' auto ' , y :  ' auto ' };
			if ( ! _plc || _plc ===  ' auto ' )
				; // ninguna acción
			más  si ( plc . longitud  ===  1 ) {
				interruptor (plc [ 0 ]) {
					caso  ' top ' :
					caso  ' inferior ' :
						o . la orientación . y  = plc [ 0 ];
						romper ;
					caso  ' izquierda ' :
					caso  ' derecho ' :
						o . la orientación . x  = plc [ 0 ];
						romper ;
				}
			}
			else {
				_plc =  $ . grep (plc, función ( palabra ) {
					retorno / ^ izquierda | derecho $ / . prueba (palabra); 
				});
				o . la orientación . x  = _plc [ 0 ] ||  ' auto ' ;

				_plc =  $ . grep (plc, función ( palabra ) {
					volver / ^ arriba | abajo $ / . prueba (palabra); 
				});
				o . la orientación . y  = _plc [ 0 ] ||  ' auto ' ;
			}
			if ( o . defaultViewDate  instanceof  Date  ||  typeof  o . defaultViewDate  ===  ' string ' ) {
				o . defaultViewDate  =  DPGlobal . parseDate ( o . defaultViewDate , formato, o . idioma , o . supongamos que está a punto de enterarse );
			} else  if ( o . defaultViewDate ) {
				año var =  o . defaultViewDate . año  ||  nueva  fecha (). getFullYear ();
				mes var =  o . defaultViewDate . mes  ||  0 ;
				día var =  o . defaultViewDate . dia  ||  1 ;
				o . defaultViewDate  =  UTCDate (año, mes, día);
			} else {
				o . defaultViewDate  =  UTCToday ();
			}
		}
		_applyEvents :  function ( evs ) {
			para ( var i = 0 , el, ch, ev; i <  evs . length ; i ++ ) {
				el = evs [i] [ 0 ];
				if (evs [i]. length  ===  2 ) {
					ch =  indefinido ;
					ev = evs [i] [ 1 ];
				} else  if (evs [i]. length  ===  3 ) {
					ch = evs [i] [ 1 ];
					ev = evs [i] [ 2 ];
				}
				EL . en (ev, ch);
			}
		}
		_unapplyEvents :  function ( evs ) {
			para ( var i = 0 , el, ev, ch; i <  evs . length ; i ++ ) {
				el = evs [i] [ 0 ];
				if (evs [i]. length  ===  2 ) {
					ch =  indefinido ;
					ev = evs [i] [ 1 ];
				} else  if (evs [i]. length  ===  3 ) {
					ch = evs [i] [ 1 ];
					ev = evs [i] [ 2 ];
				}
				EL . off (ev, ch);
			}
		}
		_buildEvents :  function () {
            eventos var = {
                keyup :  $ . proxy ( función ( e ) {
                    if ( $ . inArray ( e . keyCode , [ 27 , 37 , 39 , 38 , 40 , 32 , 13 , 9 ]) ===  - 1 )
                        esta . actualizar ();
                }, esto ),
                keydown :  $ . proxy ( este . keydown , este ),
                pegar :  $ . proxy ( esto . pegar , esto )
            };

            if ( this . o . showOnFocus  ===  true ) {
                eventos . enfoque  =  $ . proxy ( esto . mostrar , esto );
            }

            if ( this . isInput ) { // entrada única
                esta . eventos  = [
                    [ Esto . elemento , eventos]
                ];
            }
            // componente: entrada + botón
            else  if ( this . component  &&  this . inputField . length ) {
                esta . eventos  = [
                    // Para los componentes que no son de solo lectura, permite la navegación con el teclado.
                    [ Esto . campo de entrada , eventos],
                    [ Esto . componente , {
                        haga clic en :  $ . proxy ( esto . mostrar , esto )
                    }]
                ];
            }
			else {
				esta . eventos  = [
					[ Esto . elemento , {
						haga clic en :  $ . proxy ( esto . mostrar , esto ),
						keydown :  $ . proxy ( este . keydown , este )
					}]
				];
			}
			esta . eventos . empujar (
				// Componente: escucha el desenfoque en los elementos descendientes
				[ Esto . elemento , ' * ' , {
					desenfoque :  $ . proxy ( función ( e ) {
						esta . _focused_from  =  e . objetivo ;
					}, esto )
				}],
				// Entrada: escucha el desenfoque en el elemento
				[ Esto . elemento , {
					desenfoque :  $ . proxy ( función ( e ) {
						esta . _focused_from  =  e . objetivo ;
					}, esto )
				}]
			);

			si ( este . o . actualizaciones inmediatas ) {
				// Activar actualizaciones de entrada inmediatamente en el año / mes cambiado
				esta . eventos . empujar ([ este . elemento , {
					' changeYear changeMonth ' :  $ . proxy ( función ( e ) {
						esta . actualización ( e . fecha );
					}, esto )
				}]);
			}

			esta . _secondaryEvents  = [
				[ Esto . selector , {
					haga clic en :  $ . proxy ( este . clic , este )
				}],
				[ Esto . selector , ' .prev, .siguiente ' , {
					haga clic en :  $ . proxy ( este . navArrowsClick , este )
				}],
				[ Esto . selector , ' .day: not (.disabled) ' , {
					haga clic en :  $ . proxy ( este . dayCellClick , este )
				}],
				[ $ ( ventana ), {
					redimensionar :  $ . proxy ( este . lugar , este )
				}],
				[ $ ( documento ), {
					' inicio de pantalla táctil ' :  $ . proxy ( función ( e ) {
						// Haga clic fuera del selector de fechas, ocúltelo
						si ( ! (
							esta . elemento . es ( e . objetivo ) ||
							esta . elemento . encontrar ( e . objetivo ). longitud  ||
							esta . selector . es ( e . objetivo ) ||
							esta . selector . encontrar ( e . objetivo ). longitud  ||
							esta . isInline
						)) {
							esta . ocultar ();
						}
					}, esto )
				}]
			];
		}
		_attachEvents :  function () {
			esta . _detachEvents ();
			esta . _applyEvents ( this . _events );
		}
		_detachEvents :  function () {
			esta . _unapplyEvents ( this . _events );
		}
		_attachSecondaryEvents :  function () {
			esta . _detachSecondaryEvents ();
			esta . _applyEvents ( este . _secondaryEvents );
		}
		_detachSecondaryEvents :  function () {
			esta . _unapplyEvents ( este . _secondaryEvents );
		}
		_trigger :  function ( event , altdate ) {
			var date = altdate ||  esta . fechas . obtener ( - 1 ),
				fecha_local =  esto . _utc_to_local (fecha);

			esta . elemento . disparador ({
				tipo :  evento ,
				fecha : local_date,
				ViewMode :  esto . ViewMode ,
				fechas :  $ . mapa ( este . fechas , este . _utc_to_local ),
				Formato :  $ . proxy ( función ( ix , formato ) {
					si ( argumentos . longitud  ===  0 ) {
						ix =  esto . fechas . longitud  -  1 ;
						formato =  este . o . formato ;
					} Demás  si ( typeof ix ===  ' cadena ' ) {
						formato = ix;
						ix =  esto . fechas . longitud  -  1 ;
					}
					formato = formato ||  esta . o . formato ;
					var fecha =  esto . fechas . obtener (ix);
					volver  DPGlobal . formatDate (fecha, formato, este . o . idioma );
				}, esto )
			});
		}

		show :  function () {
			if ( this . inputField . is ( ' : disabled ' ) || ( this . inputField . prop ( ' readonly ' ) &&  this . o . enableOnReadonly  ===  false ))
				volver ;
			if ( ! this . isInline )
				esta . selector . appendTo ( este . o . contenedor );
			esta . lugar ();
			esta . selector . show ();
			esta . _attachSecondaryEvents ();
			esta . _trigger ( ' show ' );
			si (( ventana . navegante . msMaxTouchPoints  ||  ' ontouchstart '  en el  documento ) &&  esto . O . disableTouchKeyboard ) {
				$ ( este . elemento ). difuminar ();
			}
			devolver  este ;
		}

		ocultar :  función () {
			if ( this . isInline  ||  ! this . picker . is ( ' : visible ' ))
				devolver  este ;
			esta . focusDate  =  null ;
			esta . selector . ocultar (). separar ();
			esta . _detachSecondaryEvents ();
			esta . setViewMode ( este . o . startView );

			if ( this . o . forceParse  &&  this . inputField . val ())
				esta . setValue ();
			esta . _trigger ( ' hide ' );
			devolver  este ;
		}

		destruir :  función () {
			esta . ocultar ();
			esta . _detachEvents ();
			esta . _detachSecondaryEvents ();
			esta . selector . eliminar ();
			eliminar  este . elemento . datos (). planificador de evento ;
			if ( ! this . isInput ) {
				eliminar  este . elemento . datos (). fecha ;
			}
			devolver  este ;
		}

		pegar :  función ( e ) {
			var dateString;
			si ( e . originalEvent . clipboardData  &&  correo . originalEvent . clipboardData . tipos
				&& $.inArray('text/plain', e.originalEvent.clipboardData.types) !== -1) {
				dateString = e.originalEvent.clipboardData.getData('text/plain');
			} else if (window.clipboardData) {
				dateString = window.clipboardData.getData('Text');
			} else {
				return;
			}
			this.setDate(dateString);
			this.update();
			e.preventDefault();
		},

		_utc_to_local: function(utc){
			if (!utc) {
				return utc;
			}

			var local = new Date(utc.getTime() + (utc.getTimezoneOffset() * 60000));

			if (local.getTimezoneOffset() !== utc.getTimezoneOffset()) {
				local = new Date(utc.getTime() + (local.getTimezoneOffset() * 60000));
			}

			return local;
		},
		_local_to_utc: function(local){
			return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));
		},
		_zero_time: function(local){
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
		},
		_zero_utc_time: function(utc){
			return utc && UTCDate(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate());
		},

		getDates: function(){
			return $.map(this.dates, this._utc_to_local);
		},

		getUTCDates: function(){
			return $.map(this.dates, function(d){
				return new Date(d);
			});
		},

		getDate: function(){
			return this._utc_to_local(this.getUTCDate());
		},

		getUTCDate: function(){
			var selected_date = this.dates.get(-1);
			if (selected_date !== undefined) {
				return new Date(selected_date);
			} else {
				return null;
			}
		},

		clearDates: function(){
			this.inputField.val('');
			this.update();
			this._trigger('changeDate');

			if (this.o.autoclose) {
				this.hide();
			}
		},

		setDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, args);
			this._trigger('changeDate');
			this.setValue();
			return this;
		},

		setUTCDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.setDates.apply(this, $.map(args, this._utc_to_local));
			return this;
		},

		setDate: alias('setDates'),
		setUTCDate: alias('setUTCDates'),
		remove: alias('destroy', 'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead'),

		setValue: function(){
			var formatted = this.getFormattedDate();
			this.inputField.val(formatted);
			return this;
		},

		getFormattedDate: function(format){
			if (format === undefined)
				format = this.o.format;

			var lang = this.o.language;
			return $.map(this.dates, function(d){
				return DPGlobal.formatDate(d, format, lang);
			}).join(this.o.multidateSeparator);
		},

		getStartDate: function(){
			return this.o.startDate;
		},

		setStartDate: function(startDate){
			this._process_options({startDate: startDate});
			this.update();
			this.updateNavArrows();
			return this;
		},

		getEndDate: function(){
			return this.o.endDate;
		},

		setEndDate: function(endDate){
			this._process_options({endDate: endDate});
			this.update();
			this.updateNavArrows();
			return this;
		},

		setDaysOfWeekDisabled: function(daysOfWeekDisabled){
			this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
			this.update();
			return this;
		},

		setDaysOfWeekHighlighted: function(daysOfWeekHighlighted){
			this._process_options({daysOfWeekHighlighted: daysOfWeekHighlighted});
			this.update();
			return this;
		},

		setDatesDisabled: function(datesDisabled){
			this._process_options({datesDisabled: datesDisabled});
			this.update();
			return this;
		},

		place: function(){
			if (this.isInline)
				return this;
			var calendarWidth = this.picker.outerWidth(),
				calendarHeight = this.picker.outerHeight(),
				visualPadding = 10,
				container = $(this.o.container),
				windowWidth = container.width(),
				scrollTop = this.o.container === 'body' ? $(document).scrollTop() : container.scrollTop(),
				appendOffset = container.offset();

			var parentsZindex = [0];
			this.element.parents().each(function(){
				var itemZIndex = $(this).css('z-index');
				if (itemZIndex !== 'auto' && Number(itemZIndex) !== 0) parentsZindex.push(Number(itemZIndex));
			});
			var zIndex = Math.max.apply(Math, parentsZindex) + this.o.zIndexOffset;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
			var left = offset.left - appendOffset.left;
			var top = offset.top - appendOffset.top;

			if (this.o.container !== 'body') {
				top += scrollTop;
			}

			this.picker.removeClass(
				'datepicker-orient-top datepicker-orient-bottom '+
				'datepicker-orient-right datepicker-orient-left'
			);

			if (this.o.orientation.x !== 'auto'){
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
				if (this.o.orientation.x === 'right')
					left -= calendarWidth - width;
			}
			// auto x orientation is best-placement: if it crosses a window
			// edge, fudge it sideways
			else {
				if (offset.left < 0) {
					// component is outside the window on the left side. Move it into visible range
					this.picker.addClass('datepicker-orient-left');
					left -= offset.left - visualPadding;
				} else if (left + calendarWidth > windowWidth) {
					// the calendar passes the widow right edge. Align it to component right side
					this.picker.addClass('datepicker-orient-right');
					left += width - calendarWidth;
				} else {
					if (this.o.rtl) {
						// Default to right
						this.picker.addClass('datepicker-orient-right');
					} else {
						// Default to left
						this.picker.addClass('datepicker-orient-left');
					}
				}
			}

			// auto y orientation is best-situation: top or bottom, no fudging,
			// decision based on which shows more of the calendar
			var yorient = this.o.orientation.y,
				top_overflow;
			if (yorient === 'auto'){
				top_overflow = -scrollTop + top - calendarHeight;
				yorient = top_overflow < 0 ? 'bottom' : 'top';
			}

			this.picker.addClass('datepicker-orient-' + yorient);
			if (yorient === 'top')
				top -= calendarHeight + parseInt(this.picker.css('padding-top'));
			else
				top += height;

			if (this.o.rtl) {
				var right = windowWidth - (left + width);
				this.picker.css({
					top: top,
					right: right,
					zIndex: zIndex
				});
			} else {
				this.picker.css({
					top: top,
					left: left,
					zIndex: zIndex
				});
			}
			return this;
		},

		_allow_update: true,
		update: function(){
			if (!this._allow_update)
				return this;

			var oldDates = this.dates.copy(),
				dates = [],
				fromArgs = false;
			if (arguments.length){
				$.each(arguments, $.proxy(function(i, date){
					if (date instanceof Date)
						date = this._local_to_utc(date);
					dates.push(date);
				}, this));
				fromArgs = true;
			} else {
				dates = this.isInput
						? this.element.val()
						: this.element.data('date') || this.inputField.val();
				if (dates && this.o.multidate)
					dates = dates.split(this.o.multidateSeparator);
				else
					dates = [dates];
				delete this.element.data().date;
			}

			dates = $.map(dates, $.proxy(function(date){
				return DPGlobal.parseDate(date, this.o.format, this.o.language, this.o.assumeNearbyYear);
			}, this));
			dates = $.grep(dates, $.proxy(function(date){
				return (
					!this.dateWithinRange(date) ||
					!date
				);
			}, this), true);
			this.dates.replace(dates);

			if (this.o.updateViewDate) {
				if (this.dates.length)
					this.viewDate = new Date(this.dates.get(-1));
				else if (this.viewDate < this.o.startDate)
					this.viewDate = new Date(this.o.startDate);
				else if (this.viewDate > this.o.endDate)
					this.viewDate = new Date(this.o.endDate);
				else
					this.viewDate = this.o.defaultViewDate;
			}

			if (fromArgs){
				// setting date by clicking
				this.setValue();
				this.element.change();
			}
			else if (this.dates.length){
				// setting date by typing
				if (String(oldDates) !== String(this.dates) && fromArgs) {
					this._trigger('changeDate');
					this.element.change();
				}
			}
			if (!this.dates.length && oldDates.length) {
				this._trigger('clearDate');
				this.element.change();
			}

			this.fill();
			return this;
		},

		fillDow: function(){
      if (this.o.showWeekDays) {
			var dowCnt = this.o.weekStart,
				html = '<tr>';
			if (this.o.calendarWeeks){
				html += '<th class="cw">&#160;</th>';
			}
			while (dowCnt < this.o.weekStart + 7){
				html += '<th class="dow';
        if ($.inArray(dowCnt, this.o.daysOfWeekDisabled) !== -1)
          html += ' disabled';
        html += '">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
      }
		},

		fillMonths: function(){
      var localDate = this._utc_to_local(this.viewDate);
			var html = '';
			var focused;
			for (var i = 0; i < 12; i++){
				focused = localDate && localDate.getMonth() === i ? ' focused' : '';
				html += '<span class="month' + focused + '">' + dates[this.o.language].monthsShort[i] + '</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		setRange: function(range){
			if (!range || !range.length)
				delete this.range;
			else
				this.range = $.map(range, function(d){
					return d.valueOf();
				});
			this.fill();
		},

		getClassNames: function(date){
			var cls = [],
				year = this.viewDate.getUTCFullYear(),
				month = this.viewDate.getUTCMonth(),
				today = UTCToday();
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){
				cls.push('old');
			} else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){
				cls.push('new');
			}
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
				cls.push('focused');
			// Compare internal UTC date with UTC today, not local today
			if (this.o.todayHighlight && isUTCEquals(date, today)) {
				cls.push('today');
			}
			if (this.dates.contains(date) !== -1)
				cls.push('active');
			if (!this.dateWithinRange(date)){
				cls.push('disabled');
			}
			if (this.dateIsDisabled(date)){
				cls.push('disabled', 'disabled-date');
			}
			if ($.inArray(date.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1){
				cls.push('highlighted');
			}

			if (this.range){
				if (date > this.range[0] && date < this.range[this.range.length-1]){
					cls.push('range');
				}
				if ($.inArray(date.valueOf(), this.range) !== -1){
					cls.push('selected');
				}
				if (date.valueOf() === this.range[0]){
          cls.push('range-start');
        }
        if (date.valueOf() === this.range[this.range.length-1]){
          cls.push('range-end');
        }
			}
			return cls;
		},

		_fill_yearsView: function(selector, cssClass, factor, year, startYear, endYear, beforeFn){
			var html = '';
			var step = factor / 10;
			var view = this.picker.find(selector);
			var startVal = Math.floor(year / factor) * factor;
			var endVal = startVal + step * 9;
			var focusedVal = Math.floor(this.viewDate.getFullYear() / step) * step;
			var selected = $.map(this.dates, function(d){
				return Math.floor(d.getUTCFullYear() / step) * step;
			});

			var classes, tooltip, before;
			for (var currVal = startVal - step; currVal <= endVal + step; currVal += step) {
				classes = [cssClass];
				tooltip = null;

				if (currVal === startVal - step) {
					classes.push('old');
				} else if (currVal === endVal + step) {
					classes.push('new');
				}
				if ($.inArray(currVal, selected) !== -1) {
					classes.push('active');
				}
				if (currVal < startYear || currVal > endYear) {
					classes.push('disabled');
				}
				if (currVal === focusedVal) {
				  classes.push('focused');
        }

				if (beforeFn !== $.noop) {
					before = beforeFn(new Date(currVal, 0, 1));
					if (before === undefined) {
						before = {};
					} else if (typeof before === 'boolean') {
						before = {enabled: before};
					} else if (typeof before === 'string') {
						before = {classes: before};
					}
					if (before.enabled === false) {
						classes.push('disabled');
					}
					if (before.classes) {
						classes = classes.concat(before.classes.split(/\s+/));
					}
					if (before.tooltip) {
						tooltip = before.tooltip;
					}
				}

				html += '<span class="' + classes.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + currVal + '</span>';
			}

			view.find('.datepicker-switch').text(startVal + '-' + endVal);
			view.find('td').html(html);
		},

		fill: function(){
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				todaytxt = dates[this.o.language].today || dates['en'].today || '',
				cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
				titleFormat = dates[this.o.language].titleFormat || dates['en'].titleFormat,
				tooltip,
				before;
			if (isNaN(year) || isNaN(month))
				return;
			this.picker.find('.datepicker-days .datepicker-switch')
						.text(DPGlobal.formatDate(d, titleFormat, this.o.language));
			this.picker.find('tfoot .today')
						.text(todaytxt)
						.css('display', this.o.todayBtn === true || this.o.todayBtn === 'linked' ? 'table-cell' : 'none');
			this.picker.find('tfoot .clear')
						.text(cleartxt)
						.css('display', this.o.clearBtn === true ? 'table-cell' : 'none');
			this.picker.find('thead .datepicker-title')
						.text(this.o.title)
						.css('display', typeof this.o.title === 'string' && this.o.title !== '' ? 'table-cell' : 'none');
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month, 0),
				day = prevMonth.getUTCDate();
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			if (prevMonth.getUTCFullYear() < 100){
        nextMonth.setUTCFullYear(prevMonth.getUTCFullYear());
      }
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var weekDay, clsName;
			while (prevMonth.valueOf() < nextMonth){
				weekDay = prevMonth.getUTCDay();
				if (weekDay === this.o.weekStart){
					html.push('<tr>');
					if (this.o.calendarWeeks){
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
							// Start of current week: based on weekstart/current date
							ws = new Date(+prevMonth + (this.o.weekStart - weekDay - 7) % 7 * 864e5),
							// Thursday of this week
							th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
							// First Thursday of year, year from thursday
							yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay()) % 7 * 864e5),
							// Calendar week: ms between thursdays, div ms per day, div 7 days
							calWeek = (th - yth) / 864e5 / 7 + 1;
						html . push ( ' <td class = "cw"> ' + calWeek + ' </td> ' );
					}
				}
				clsName =  este . getClassNames (prevMonth);
				clsName . empuje ( ' día ' );

				var content =  prevMonth . getUTCDate ();

				if ( this . o . beforeShowDay  ! ==  $ . noop ) {
					antes =  esto . o . beforeShowDay ( this . _utc_to_local (prevMonth));
					if (antes ===  indefinido )
						antes = {};
					else  if ( typeof before ===  ' boolean ' )
						antes = {habilitado : antes};
					else  if ( typeof before ===  ' string ' )
						antes = {clases : antes};
					si ( antes . habilitado  ===  falso )
						clsName . empujar ( ' deshabilitado ' );
					si ( antes . clases )
						clsName =  clsName . concat ( antes de . clases . split ( / \ s + / ));
					if ( antes . tooltip )
						tooltip =  antes . información sobre herramientas ;
					si ( antes . contenido )
						contenido =  antes . contenido ;
				}

				// Comprueba si existe UniqueSort (soportado por jquery> = 1.12 y> = 2.2)
				// Retroceder a una función única para versiones anteriores de jQuery
				if ( $ . isFunction ( $ . uniqueSort )) {
					clsName =  $ . uniqueSort (clsName);
				} else {
					clsName =  $ . único (clsName);
				}

				html . push ( ' <td class = " ' + clsName . join ( '  ' ) + ' " '  + (tooltip ?  ' title = " ' + tooltip + ' " '  :  ' ' ) +  ' data-date = " '  +  prevMonth . getTime (). toString () +  ' "> '  </td> ' );
				tooltip =  null ;
				if (weekDay ===  this . o . weekEnd ) {
					html . empujar ( ' </tr> ' );
				}
				PrevMonth . setUTCDate ( prevMonth . getUTCDate () +  1 );
			}
			esta . selector . encontrar ( ' .datepicker-days tbody ' ). html ( html . join ( ' ' ));

			var monthsTitle = fechas [ esto . o . idioma ]. mesesTítulo  || fechas [ ' en ' ]. mesesTítulo  ||  ' Meses ' ;
			meses var =  esto . selector . encontrar ( ' .datepicker-months ' )
						. encontrar ( ' .datepicker-switch ' )
							. texto ( este . o . maxViewMode  <  2  ? mesesTítulo : año)
							. fin ()
						. encontrar ( ' tbody span ' ). removeClass ( ' activo ' );

			$ . cada ( esto . fechas , función ( i , d ) {
				if ( d . getUTCFullYear () === año)
					meses . eq ( d . getUTCMonth ()). addClass ( ' activo ' );
			});

			if (year < startYear || year > endYear) {
				meses . addClass ( ' deshabilitado ' );
			}
			if (year === startYear) {
				meses . slice ( 0 , startMonth). addClass ( ' deshabilitado ' );
			}
			if (year === endYear) {
				meses . slice (endMonth + 1 ). addClass ( ' deshabilitado ' );
			}

			if ( this . o . beforeShowMonth  ! ==  $ . noop ) {
				var que =  esto ;
				$ . cada (meses, función ( i , mes ) {
          var moDate =  new  Date (year, i, 1 );
          var antes =  eso . o . beforeShowMonth (moDate);
					if (antes ===  indefinido )
						antes = {};
					else  if ( typeof before ===  ' boolean ' )
						antes = {habilitado : antes};
					else  if ( typeof before ===  ' string ' )
						antes = {clases : antes};
					if ( antes . habilitado  ===  falso  &&  ! $ (mes). hasClass ( ' deshabilitado ' ))
					    $ (mes). addClass ( ' deshabilitado ' );
					si ( antes . clases )
					    $ (mes). addClass ( antes . clases );
					if ( antes . tooltip )
					    $ (mes). prop ( ' título ' , antes . información sobre herramientas );
				});
			}

			// Generador de decenas / años
			esta . _fill_yearsView (
				' .datepicker-years ' ,
				' año ' ,
				10 ,
				año,
				año de inicio,
				año final,
				esta . o . antesShowYear
			);

			// Generador de siglo / décadas
			esta . _fill_yearsView (
				' .datepicker-decadas ' ,
				' década ' ,
				100 ,
				año,
				año de inicio,
				año final,
				esta . o . antesShowDecade
			);

			// Generador del milenio / selector de siglos
			esta . _fill_yearsView (
				' .datepicker-siglos ' ,
				' siglo ' ,
				1000 ,
				año,
				año de inicio,
				año final,
				esta . o . antesShowCentury
			);
		}

		updateNavArrows :  function () {
			if ( ! this . _allow_update )
				volver ;

			var d =  nueva  fecha ( este . viewDate ),
				año =  d . getUTCFullYear (),
				mes =  d . getUTCMonth (),
				startYear =  esto . o . startDate  ! ==  - Infinity  ?  esta . o . fecha de inicio . getUTCFullYear () :  - Infinity ,
				startMonth =  esto . o . startDate  ! ==  - Infinity  ?  esta . o . fecha de inicio . getUTCMonth () :  - Infinito ,
				endYear =  esto . o . endDate  ! ==  Infinity  ?  esta . o . endDate . getUTCFullYear () :  Infinity ,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				prevIsDisabled,
				nextIsDisabled,
				factor = 1;
			switch (this.viewMode){
				case 4:
					factor *= 10;
					/* falls through */
				case 3:
					factor *= 10;
					/* falls through */
				case 2:
					factor *= 10;
					/* falls through */
				case 1:
					prevIsDisabled = Math.floor(year / factor) * factor <= startYear;
					nextIsDisabled = Math.floor(year / factor) * factor + factor > endYear;
					break;
				case 0:
					prevIsDisabled = year <= startYear && month <= startMonth;
					nextIsDisabled = year >= endYear && month >= endMonth;
					break;
			}

			this.picker.find('.prev').toggleClass('disabled', prevIsDisabled);
			this.picker.find('.next').toggleClass('disabled', nextIsDisabled);
		},

		click: function(e){
			e.preventDefault();
			e.stopPropagation();

			var target, dir, day, year, month;
			target = $(e.target);

			// Clicked on the switch
			if (target.hasClass('datepicker-switch') && this.viewMode !== this.o.maxViewMode){
				this.setViewMode(this.viewMode + 1);
			}

			// Clicked on today button
			if (target.hasClass('today') && !target.hasClass('day')){
				this.setViewMode(0);
				this._setDate(UTCToday(), this.o.todayBtn === 'linked' ? null : 'view');
			}

			// Clicked on clear button
			if ( target . hasClass ( ' clear ' )) {
				esta . clearDates ();
			}

			if ( ! target . hasClass ( ' disabled ' )) {
				// Click en un mes, año, década, siglo
				if ( target . hasClass ( ' month ' )
						||  objetivo . hasClass ( ' año ' )
						||  objetivo . hasClass ( ' decada ' )
						||  objetivo . hasClass ( ' siglo ' )) {
					esta . viewDate . setUTCDate ( 1 );

					día =  1 ;
					if ( this . viewMode  ===  1 ) {
						mes =  objetivo . padre (). encontrar ( ' span ' ). índice (objetivo);
						año =  esto . viewDate . getUTCFullYear ();
						esta . viewDate . setUTCMonth (mes);
					} else {
						mes =  0 ;
						año =  Número ( target . texto ());
						esta . viewDate . setUTCFullYear (año);
					}

					esta . _trigger ( DPGlobal . viewModes [ this . viewMode  -  1 ]. e , this . viewDate );

					if ( this . viewMode  ===  this . o . minViewMode ) {
						esta . _setDate ( UTCDate (año, mes, día));
					} else {
						esta . setViewMode ( este . viewMode  -  1 );
						esta . llenar ();
					}
				}
			}

			if ( este . selector . es ( ' : visible ' ) &&  esto . _focused_from ) {
				esta . _focused_from . enfoque ();
			}
			eliminar  este . _focused_from ;
		}

		dayCellClick :  function ( e ) {
			var $ target =  $ ( e . currentTarget );
			var timestamp =  $ target . datos ( ' fecha ' );
			var date =  new  Date (timestamp);

			if ( this . o . updateViewDate ) {
				if ( fecha . getUTCFullYear () ! ==  this . viewDate . getUTCFullYear ()) {
					esta . _trigger ( ' changeYear ' , this . viewDate );
				}

				if ( date . getUTCMonth () ! ==  this . viewDate . getUTCMonth ()) {
					esta . _trigger ( ' changeMonth ' , this . viewDate );
				}
			}
			esta . _setDate (fecha);
		}

		// Haga clic en anterior o siguiente
		navArrowsClick :  function ( e ) {
			var $ target =  $ ( e . currentTarget );
			var dir =  $ target . hasClass ( ' prev ' ) ?  - 1  :  1 ;
			if ( this . viewMode  ! ==  0 ) {
				dir * =  DPGlobal . viewModes [ este . viewMode ]. navStep  *  12 ;
			}
			this.viewDate = this.moveMonth(this.viewDate, dir);
			this._trigger(DPGlobal.viewModes[this.viewMode].e, this.viewDate);
			this.fill();
		},

		_toggle_multidate: function(date){
			var ix = this.dates.contains(date);
			if (!date){
				this.dates.clear();
			}

			if (ix !== -1){
				if (this.o.multidate === true || this.o.multidate > 1 || this.o.toggleActive){
					this.dates.remove(ix);
				}
			} else if (this.o.multidate === false) {
				this.dates.clear();
				this.dates.push(date);
			}
			else {
				this.dates.push(date);
			}

			if (typeof this.o.multidate === 'number')
				while (this.dates.length > this.o.multidate)
					this.dates.remove(0);
		},

		_setDate: function(date, which){
			if (!which || which === 'date')
				this._toggle_multidate(date && new Date(date));
			if ((!which && this.o.updateViewDate) || which === 'view')
				this.viewDate = date && new Date(date);

			this.fill();
			this.setValue();
			if (!which || which !== 'view') {
				this._trigger('changeDate');
			}
			this.inputField.trigger('change');
			if (this.o.autoclose && (!which || which === 'date')){
				this.hide();
			}
		},

		moveDay: function(date, dir){
			var newDate = new Date(date);
			newDate.setUTCDate(date.getUTCDate() + dir);

			return newDate;
		},

		moveWeek: function(date, dir){
			return this.moveDay(date, dir * 7);
		},

		moveMonth: function(date, dir){
			if (!isValidDate(date))
				return this.o.defaultViewDate;
			if (!dir)
				return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag === 1){
				test = dir === -1
					// If going back one month, make sure month is not current month
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
					? function(){
						return new_date.getUTCMonth() === month;
					}
					// If going forward one month, make sure month is as expected
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
					: function(){
						return new_date.getUTCMonth() !== new_month;
					};
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				new_month = (new_month + 12) % 12;
			}
			else {
				// For magnitudes >1, move one month at a time...
				for (var i=0; i < mag; i++)
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function(){
					return new_month !== new_date.getUTCMonth();
				};
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()){
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function(date, dir){
			return this.moveMonth(date, dir*12);
		},

		moveAvailableDate: function(date, dir, fn){
			do {
				date = this[fn](date, dir);

				if (!this.dateWithinRange(date))
					return false;

				fn = 'moveDay';
			}
			while (this.dateIsDisabled(date));

			return date;
		},

		weekOfDateIsDisabled: function(date){
			return $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1;
		},

		dateIsDisabled: function(date){
			return (
				this.weekOfDateIsDisabled(date) ||
				$.grep(this.o.datesDisabled, function(d){
					return isUTCEquals(date, d);
				}).length > 0
			);
		},

		dateWithinRange: function(date){
			return date >= this.o.startDate && date <= this.o.endDate;
		},

		keydown: function(e){
			if (!this.picker.is(':visible')){
				if (e.keyCode === 40 || e.keyCode === 27) { // allow down to re-show picker
					this.show();
					e.stopPropagation();
        }
				return;
			}
			var dateChanged = false,
				dir, newViewDate,
				focusDate = this.focusDate || this.viewDate;
			switch (e.keyCode){
				case 27: // escape
					if (this.focusDate){
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill();
					}
					else
						this.hide();
					e.preventDefault();
					e.stopPropagation();
					break;
				case 37: // left
				case 38: // up
				case 39: // right
				case 40: // down
					if (!this.o.keyboardNavigation || this.o.daysOfWeekDisabled.length === 7)
						break;
					dir = e.keyCode === 37 || e.keyCode === 38 ? -1 : 1;
          if (this.viewMode === 0) {
  					if (e.ctrlKey){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');

  						if (newViewDate)
  							this._trigger('changeYear', this.viewDate);
  					} else if (e.shiftKey){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');

  						if (newViewDate)
  							this._trigger('changeMonth', this.viewDate);
  					} else if (e.keyCode === 37 || e.keyCode === 39){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveDay');
  					} else if (!this.weekOfDateIsDisabled(focusDate)){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveWeek');
  					}
          } else if (this.viewMode === 1) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');
          } else if (this.viewMode === 2) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');
          }
					if (newViewDate){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 13: // enter
					if (!this.o.forceParse)
						break;
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
					if (this.o.keyboardNavigation) {
						this._toggle_multidate(focusDate);
						dateChanged = true;
					}
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.setValue();
					this.fill();
					if (this.picker.is(':visible')){
						e.preventDefault();
						e.stopPropagation();
						if (this.o.autoclose)
							this.hide();
					}
					break;
				case 9: // tab
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.fill();
					this.hide();
					break;
			}
			if (dateChanged){
				if (this.dates.length)
					this._trigger('changeDate');
				else
					this._trigger('clearDate');
				this.inputField.trigger('change');
			}
		},

		setViewMode: function(viewMode){
			this.viewMode = viewMode;
			this.picker
				.children('div')
				.hide()
				.filter('.datepicker-' + DPGlobal.viewModes[this.viewMode].clsName)
					.show();
			this.updateNavArrows();
      this._trigger('changeViewMode', new Date(this.viewDate));
		}
	};

	var DateRangePicker = function(element, options){
		$.data(element, 'datepicker', this);
		this.element = $(element);
		this.inputs = $.map(options.inputs, function(i){
			return i.jquery ? i[0] : i;
		});
		delete options.inputs;

		this.keepEmptyValues = options.keepEmptyValues;
		delete options.keepEmptyValues;

		datepickerPlugin.call($(this.inputs), options)
			.on('changeDate', $.proxy(this.dateUpdated, this));

		this.pickers = $.map(this.inputs, function(i){
			return $.data(i, 'datepicker');
		});
		this.updateDates();
	};
	DateRangePicker.prototype = {
		updateDates: function(){
			this.dates = $.map(this.pickers, function(i){
				return i.getUTCDate();
			});
			this.updateRanges();
		},
		updateRanges: function(){
			var range = $.map(this.dates, function(d){
				return d.valueOf();
			});
			$.each(this.pickers, function(i, p){
				p.setRange(range);
			});
		},
		clearDates: function(){
			$.each(this.pickers, function(i, p){
				p.clearDates();
			});
		},
		dateUpdated: function(e){
			// `this.updating` is a workaround for preventing infinite recursion
			// between `changeDate` triggering and `setUTCDate` calling.  Until
			// there is a better mechanism.
			if (this.updating)
				return;
			this.updating = true;

			var dp = $.data(e.target, 'datepicker');

			if (dp === undefined) {
				return;
			}

			var new_date = dp.getUTCDate(),
				keep_empty_values = this.keepEmptyValues,
				i = $.inArray(e.target, this.inputs),
				j = i - 1,
				k = i + 1,
				l = this.inputs.length;
			if (i === -1)
				return;

			$.each(this.pickers, function(i, p){
				if (!p.getUTCDate() && (p === dp || !keep_empty_values))
					p.setUTCDate(new_date);
			});

			if (new_date < this.dates[j]){
				// Date being moved earlier/left
				while (j >= 0 && new_date < this.dates[j]){
					this.pickers[j--].setUTCDate(new_date);
				}
			} else if (new_date > this.dates[k]){
				// Date being moved later/right
				while (k < l && new_date > this.dates[k]){
					this.pickers[k++].setUTCDate(new_date);
				}
			}
			this.updateDates();

			delete this.updating;
		},
		destroy: function(){
			$.map(this.pickers, function(p){ p.destroy(); });
			$(this.inputs).off('changeDate', this.dateUpdated);
			delete this.element.data().datepicker;
		},
		remove: alias('destroy', 'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead')
	};

	function opts_from_el(el, prefix){
		// Derive options from element data-attrs
		var data = $(el).data(),
			out = {}, inkey,
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
		prefix = new RegExp('^' + prefix.toLowerCase());
		function re_lower(_,a){
			return a.toLowerCase();
		}
		for (var key in data)
			if (prefix.test(key)){
				inkey = key.replace(replace, re_lower);
				out[inkey] = data[key];
			}
		return out;
	}

	function opts_from_locale(lang){
		// Derive options from locale plugins
		var out = {};
		// Check if "de-DE" style date is available, if not language should
		// fallback to 2 letter code eg "de"
		if (!dates[lang]){
			lang = lang.split('-')[0];
			if (!dates[lang])
				return;
		}
		var d = dates[lang];
		$.each(locale_opts, function(i,k){
			if (k in d)
				out[k] = d[k];
		});
		return out;
	}

	var old = $.fn.datepicker;
	var datepickerPlugin = function(option){
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return;
		this.each(function(){
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data){
				var elopts = opts_from_el(this, 'date'),
					// Preliminary otions
					xopts = $.extend({}, defaults, elopts, options),
					locopts = opts_from_locale(xopts.language),
					// Options priority: js args, data-attrs, locales, defaults
					opts = $.extend({}, defaults, locopts, elopts, options);
				if ($this.hasClass('input-daterange') || opts.inputs){
					$.extend(opts, {
						inputs: opts.inputs || $this.find('input').toArray()
					});
					data = new DateRangePicker(this, opts);
				}
				else {
					data = new Datepicker(this, opts);
				}
				$this.data('datepicker', data);
			}
			if (typeof option === 'string' && typeof data[option] === 'function'){
				internal_return = data[option].apply(data, args);
			}
		});

		if (
			internal_return === undefined ||
			internal_return instanceof Datepicker ||
			internal_return instanceof DateRangePicker
		)
			return this;

		if (this.length > 1)
			throw new Error('Using only allowed for the collection of a single element (' + option + ' function)');
		else
			return internal_return;
	};
	$.fn.datepicker = datepickerPlugin;

	var defaults = $.fn.datepicker.defaults = {
		assumeNearbyYear: false,
		autoclose: false,
		beforeShowDay: $.noop,
		beforeShowMonth: $.noop,
		beforeShowYear: $.noop,
		beforeShowDecade: $.noop,
		beforeShowCentury: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		toggleActive: false,
		daysOfWeekDisabled: [],
		daysOfWeekHighlighted: [],
		datesDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'mm/dd/yyyy',
		keepEmptyValues: false,
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		maxViewMode: 4,
		multidate: false,
		multidateSeparator: ',',
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		updateViewDate: true,
		weekStart: 0,
		disableTouchKeyboard: false,
		enableOnReadonly: true,
		showOnFocus: true,
		zIndexOffset: 10,
		container: 'body',
		immediateUpdates: false,
		title: '',
		templates: {
			leftArrow: '&#x00AB;',
			rightArrow: '&#x00BB;'
		},
    showWeekDays: true
	};
	var locale_opts = $.fn.datepicker.locale_opts = [
		'format',
		'rtl',
		'weekStart'
	];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear",
			titleFormat: "MM yyyy"
		}
	};

	var DPGlobal = {
		viewModes: [
			{
				names: ['days', 'month'],
				clsName: 'days',
				e: 'changeMonth'
			},
			{
				names: ['months', 'year'],
				clsName: 'months',
				e: 'changeYear',
				navStep: 1
			},
			{
				names: ['years', 'decade'],
				clsName: 'years',
				e: 'changeDecade',
				navStep: 10
			},
			{
				names: ['decades', 'century'],
				clsName: 'decades',
				e: 'changeCentury',
				navStep: 100
			},
			{
				names: ['centuries', 'millennium'],
				clsName: 'centuries',
				e: 'changeMillennium',
				navStep: 1000
			}
		],
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
		parseFormat: function(format){
			if (typeof format.toValue === 'function' && typeof format.toDisplay === 'function')
                return format;
            // IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separators: separators, parts: parts};
		},
		parseDate: function(date, format, language, assumeNearby){
			if (!date)
				return undefined;
			if (date instanceof Date)
				return date;
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			if (format.toValue)
				return format.toValue(date, format, language);
			var fn_map = {
					d: 'moveDay',
					m: 'moveMonth',
					w: 'moveWeek',
					y: 'moveYear'
				},
				dateAliases = {
					yesterday: '-1d',
					today: '+0d',
					tomorrow: '+1d'
				},
				parts, part, dir, i, fn;
			if (date in dateAliases){
				date = dateAliases [date];
			}
			if ( / ^ [ \ - + ] \ d + [dmwy] ( [ \ s ,] + [ \ - + ] \ d + [dmwy] ) * $ / i . test (fecha)) {
				partes =  fecha . coincidencia ( / ( [ \ - + ] \ d + ) ( [dmwy] ) / gi );
				date =  new  Date ();
				para (i = 0 ; i <  partes . longitud ; i ++ ) {
					parte = partes [i]. coincidencia ( / ( [ \ - + ] \ d + ) ( [dmwy] ) / i );
					dir =  Número (parte [ 1 ]);
					fn = fn_map [parte [ 2 ]. toLowerCase ()];
					fecha =  Selector de fecha . prototipo [fn] (fecha, dir);
				}
				devuelve el  selector de fecha . prototipo . _zero_utc_time (fecha);
			}

			partes = fecha &&  fecha . emparejar ( esto . no puntuación ) || [];

			función  applyNearbyYear ( año , umbral ) {
				si (umbral ===  verdadero )
					umbral =  10 ;

				// si el año tiene 2 dígitos o menos, lo más probable es que el usuario esté tratando de obtener un siglo reciente
				si (año <  100 ) {
					año + =  2000 ;
					// si el año nuevo es más que el umbral de los años anteriores, use el siglo pasado
					if (año > (( nueva  fecha ()). getFullYear () + umbral)) {
						año - =  100 ;
					}
				}

				año de regreso
			}

			var parsed = {},
				setters_order = [ ' yyyy ' , ' yy ' , ' M ' , ' MM ' , ' m ' , ' mm ' , ' d ' , ' dd ' ],
				setters_map = {
					aaaa :  función ( d , v ) {
						volver  d . setUTCFullYear (asumiendoNearby ?  applyNearbyYear (v, asumiendoNearby) : v);
					}
					m :  función ( d , v ) {
						si ( esNaN (d))
							volver d;
						v - =  1 ;
						mientras que (v <  0 ) v + =  12 ;
						v % =  12 ;
						d . setUTCMonth (v);
						while ( d . getUTCMonth () ! == v)
							d . setUTCDate ( d . getUTCDate () - 1 );
						volver d;
					}
					d :  función ( d , v ) {
						volver  d . setUTCDate (v);
					}
				}
				val, filtrado;
			setters_map [ ' yy ' ] = setters_map [ ' yyyy ' ];
			setters_map [ ' M ' ] = setters_map [ ' MM ' ] = setters_map [ ' mm ' ] = setters_map [ ' m ' ];
			setters_map [ ' dd ' ] = setters_map [ ' d ' ];
			fecha =  UTCToday ();
			var fparts =  formato . partes . slice ();
			// Quitar partes noop
			if ( parts . length  ! ==  fparts . length ) {
				fparts =  $ (fparts). filtro ( función ( i , p ) {
					devuelve  $ . inArray (p, setters_order) ! ==  - 1 ;
				}). toArray ();
			}
			// Proceso restante
			función  match_part () {
				var m =  esto . corte ( 0 , partes [i]. longitud ),
					p = partes [i]. corte ( 0 , m . longitud );
				volver  m . toLowerCase () ===  p . toLowerCase ();
			}
			if ( parts . length  ===  fparts . length ) {
				var cnt;
				para (i = 0 , cnt =  fparts . length ; i < cnt; i ++ ) {
					val =  parseInt (partes [i], 10 );
					parte = partes [i];
					if ( isNaN (val)) {
						interruptor (parte) {
							caso  ' MM ' :
								Filtrado =  $ (fechas [idioma]. meses ). filtro (match_part);
								val =  $ . inArray (filtrado [ 0 ], fechas [idioma]. meses ) +  1 ;
								romper ;
							caso  ' M ' :
								filtrados =  $ (fechas [idioma]. meses cortos ). filtro (match_part);
								val =  $ . inArray (filtrado [ 0 ], fechas [idioma]. monthsShort ) +  1 ;
								romper ;
						}
					}
					analizado [parte] = val;
				}
				var _date, s;
				para (i = 0 ; i <  setters_order . length ; i ++ ) {
					s = setters_order [i];
					if (s en parsed &&  ! isNaN (parsed [s])) {
						_date =  new  Date (date);
						setters_map [s] (_ date, parsed [s]);
						if ( ! isNaN (_date))
							fecha = fecha ;
					}
				}
			}
			fecha de regreso
		}
		formatDate :  función ( fecha , formato , idioma ) {
			si ( ! fecha)
				return  ' ' ;
			si ( typeof formato ===  ' cadena ' )
				formato =  DPGlobal . parseFormat (formato);
			si ( formato . para mostrar )
                return format.toDisplay(date, format, language);
            var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			date = [];
			var seps = $.extend([], format.separators);
			for (var i=0, cnt = format.parts.length; i <= cnt; i++){
				if (seps.length)
					date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>'+
			              '<tr>'+
			                '<th colspan="7" class="datepicker-title"></th>'+
			              '</tr>'+
							'<tr>'+
								'<th class="prev">'+defaults.templates.leftArrow+'</th>'+
								'<th colspan="5" class="datepicker-switch"></th>'+
								'<th class="next">'+defaults.templates.rightArrow+'</th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot>'+
							'<tr>'+
								'<th colspan="7" class="today"></th>'+
							'</tr>'+
							'<tr>'+
								'<th colspan="7" class="clear"></th>'+
							'</tr>'+
						'</tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-decades">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-centuries">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$ . fn . Selector de fechas . DPGlobal  = DPGlobal;


	/ * DATEPICKER SIN CONFLICTO
	* =================== * /

	$ . fn . Selector de fechas . noConflict  =  function () {
		$ . fn . datepicker  = old;
		devolver  este ;
	};

	/ * VERSIÓN DATEPICKER
	 * =================== * /
	$ . fn . Selector de fechas . version  =  ' 1.8.0 ' ;

	$ . fn . Selector de fechas . obsoleta  =  función ( msg ) {
		 consola de  var =  ventana . consola ;
		if ( consola  &&  consola . advertir ) {
			consola . advertir ( ' DEPRECATED: '  + msg);
		}
	};


	/ * DATEPICKER DATA-API
	* ================== * /

	$ ( documento ). en (
		' focus.datepicker.data-api click.datepicker.data-api ' ,
		' [data-proporcionar = "datepicker"] ' ,
		función ( e ) {
			var $ this =  $ ( this );
			if ( $ this . data ( ' datepicker ' ))
				volver ;
			e . preventDefault ();
			// click en el componente requiere que lo mostremos explícitamente
			datepickerPlugin . llamada ($ esto, ' show ' );
		}
	);
	$ ( function () {
		datepickerPlugin . call ( $ ( ' [data-proporcion = "datepicker-inline"] ' ));
	});

}));