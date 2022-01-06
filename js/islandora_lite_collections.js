var oldUrl = jQuery('.field--name-field-member-of .field__items .field__item a').attr("href");
var newUrl = oldUrl.replace("/node/", "/collection/");
jQuery('.field--name-field-member-of .field__items .field__item a').attr("href", newUrl);
