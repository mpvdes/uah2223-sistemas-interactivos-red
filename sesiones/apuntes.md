
# Table of Contents

1.  [Atajos de teclado nano](#orgbf997f9)
2.  [Configuraciones nano](#orga48eeea)
3.  [Atajos de teclado emacs](#orgfb57655)
4.  [Configuraciones emacs](#orgc411838)
    1.  [web-mode.el](#org8848357)
    2.  [](#orge652ee8)


<a id="orgbf997f9"></a>

# Atajos de teclado nano


<a id="orga48eeea"></a>

# Configuraciones nano

Estas configuraciones las indicamos en nuestro archivo de configuración de nano ".nanorc"

    ## Establezco tamaño de tabulación en dos espacios
    set tabsize 2
    ## Establezco autoindentado, es decir, hereda del parent
    set autoindent
    ## Convierte tabs a espacios
    set tabstospaces
    ## Aquí configuro número de línea
    set linenumbers
    ## Aquí configuro ajuste suave de línea
    set softwrap


<a id="orgfb57655"></a>

# Atajos de teclado emacs


<a id="orgc411838"></a>

# Configuraciones emacs


<a id="org8848357"></a>

## web-mode.el

-   Este modo nos ayuda a trabajar los archivos HTML
-   Instalamos paquete con `M-x package-install`
-   le indicamos "web-mode"
-   Añadimos lo siguiente en nuestro *init.el*
    
        (require 'web-mode)
        (add-to-list 'auto-mode-alist '("\\.phtml\\'" . web-mode))
        (add-to-list 'auto-mode-alist '("\\.tpl\\.php\\'" . web-mode))
        (add-to-list 'auto-mode-alist '("\.[agj]sp\'" . web-mode))
        (add-to-list 'auto-mode-alist '("\.as[cp]x\'" . web-mode))
        (add-to-list 'auto-mode-alist '("\.erb\'" . web-mode))
        (add-to-list 'auto-mode-alist '("\.mustache\'" . web-mode))
        (add-to-list 'auto-mode-alist '("\.djhtml\'" . web-mode))
        (add-to-list 'auto-mode-alist '("\.html?\'" . web-mode))
        
        (global-set-key (kbd "C-c y") 'web-mode-yank)


<a id="orge652ee8"></a>

## 

