var map;


//Initialize the map
function mapInit(){

	var layer = new ol.layer.Tile({
		source: new ol.source.XYZ({
			url: 'maptiles/{z}/{x}/{y}.png',
			crossOrigin: 'anonymous'
		}),
	});
	
	var view = new ol.View({
		center: [35000000,10000000],
		zoom: 3,
	});
	
	map = new ol.Map({
		target: 'map',
		layers: [layer],
		target: 'map',
		view: view
	});
	
}


