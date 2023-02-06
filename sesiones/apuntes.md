

# Atajos de teclado nano


# Configuraciones nano

Estas configuraciones las indicamos en nuestro archivo de configuración de nano "*.nanorc*"

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


# Atajos de teclado emacs


# Configuraciones emacs


## web-mode.el

-   Este modo nos ayuda a trabajar los archivos HTML
-   Instalamos paquete con **"<kbd>texto</kbd>"** M-x `package-install`
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


## 

