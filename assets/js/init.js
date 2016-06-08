window.onload = function() {

		pjazz( "content", "content", "content" );

		var trigger = document.getElementById( 'trigger' ),
				clapperContainer = document.getElementById( 'clapper_container' ),
				clapper = document.getElementById('clapper'),
				momentumElem = document.getElementById( 'momentum' );


		function momentum() {
			if ( momentumElem.classList.contains( "active" ) ) {
				momentumElem.classList.remove( "active" );
				console.log( "removed active class" );
			} else {
				setTimeout( function() {
					momentumElem.classList.add( "active" );
					console.log( "added active class" );
				}, 2000 );
			}
		}

		function hideClapper() {
			if ( clapperContainer.classList.contains( "hide" ) ) {
				clapperContainer.classList.remove( "hide" );
			} else {
				clapperContainer.classList.add( "hide" );
			}
		}

		var triggerClapper = function() {

		}

		var rng = function( input ) {
			var roof = input;
			random = Math.floor( Math.random() * roof );
			return random;
		}

		trigger.onclick = function( event ) {
			event.preventDefault();
			setTimeout( function() {
				hideClapper();
			}, 1000 );
			momentum();
			if ( clapperContainer.classList.contains( "active" ) ) {
				clapperContainer.classList.remove( "active" );
			} else {
				clapperContainer.classList.add( "active" );
				// do the dirty rotation of the clapper
				clapper.classList.remove( "rot0", "rot1", "rot2", "rot3", "rot4", "rot5" );
				clapper.classList.add( "rot" + rng( 6 ) );
			}

		}
};
