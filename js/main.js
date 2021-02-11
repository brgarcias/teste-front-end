(function () {

	(function () {
		let produtosJson = '';
		let produtosModais = "";
		var flickerAPI = "json/produto.json";
		$.getJSON(flickerAPI, {
			tags: "mount rainier",
			tagmode: "any",
			format: "json"
		})
			.done(function (data) {
				for (i = 0; i < data.products.length; i++) {
					produtosJson += '<div class="product"><div class="product__info">';
					produtosJson += '<img class="product__image" src="' + data.products[i].photo + '" alt="Product 1" />';
					produtosJson += '<h3 class="product__title">' + data.products[i].productName + '</h3>';
					produtosJson += '<span class="product__varietal extra highlight">' + data.products[i].descriptionShort + '</span>';
					produtosJson += '<span class="product__price highlight">R$ ' + data.products[i].price + '</span>';
					produtosJson += '<button data-izimodal-open="#modal' + i + '" data-izimodal-transitionin="fadeInDown" class="trigger action action--button action--buy"><i class="fa fa-search"></i><span class="action__text">Ver detalhes</span></button></div></div>';
				}
				$('#resultado').html(produtosJson);
				for (i = 0; i < data.products.length; i++) {
					produtosModais = ' ';
					produtosModais += '<div class="product"><div class="product__info">';
					produtosModais += '<img class="product__image" src="' + data.products[i].photo + '" alt="Produto ' + i + 1 + '" />';
					produtosModais += '<h3 class="product__title">' + data.products[i].productName + '</h3>';
					produtosModais += '<span class="product__varietal extra highlight">' + data.products[i].descriptionShort + '</span>';
					produtosModais += '<span class="product__price highlight">R$ ' + data.products[i].price + '</span>';
					$("#modal" + i).iziModal();
					$("#modal" + i).html(produtosModais);
				}
			});
	})();

	init();

})();