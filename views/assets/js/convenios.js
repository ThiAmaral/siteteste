
    imagem1 = new Image();
    imagem1.src = "#";
    imagem1on = new Image();
    imagem1on.src = "#";
    function Ativo1(imagem)
    {
    if (document.images) document[imagem].src = eval(imagem + "on.src");
    }
    
    function Desativo1(imagem)
    {
    if (document.images) document[imagem].src = eval(imagem + ".src");
    }