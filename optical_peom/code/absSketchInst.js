include("jsVectors.js");

var AbsSketchInst = (function() {
	function AbsSketchInst( pos, col, radius, type, theta, oRadX, oRadY, speed ) {
		this.position = pos || new Vector();
		this.color = col || new Array( 0., 0., 0. );
		this.baseColor = new Array( col[0], col[1], col[2] );
		this.radius = radius || 0.;
		this.type = type || "circle";
		this.theta = theta || 0.;
		this.oRadiusX = oRadX;
		this.oRadiusY = oRadY;
		this.speed = speed || 1; //Time it takes in seconds to complete one full revolution.
	}

	AbsSketchInst.prototype = {
		draw : function( sketchObj, radius ) {
			if (this.type == "circle") {
				if (typeof radius === "undefined" ) {
					sketchObj.circle( this.radius );
				}
				else {
					sketchObj.circle( radius );
				}

			} else if ( this.type == "framecircle" ) {
				if (typeof radius === "undefined" ) {
					sketchObj.framecircle( this.radius );
				}
				else {
					sketchObj.framecircle( radius );
				}
			}
		},

		getBaseColor : function() {
			var a = new Array();

			for ( i = 0; i < this.baseColor.length; i++ ) {
				a.push( this.baseColor[i] );
			}
			return a;
		}


	};
	return AbsSketchInst;
})(); 