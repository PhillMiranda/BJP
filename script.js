// Definição de objetos e variáveis iniciais
var M = {}; // Objeto de namespace M
M.yui = {}; // Objeto de namespace M.yui
M.pageloadstarttime = new Date(); // Marca o tempo de carregamento da página
M.cfg = {
    // Configurações do Moodle (https://ucaplus.alterdata.com.br)
    "wwwroot": "https:\/\/ucaplus.alterdata.com.br",
    "sesskey": "QEz0GQ9ExI",
    // ... outras configurações ...
};

// Função para configurar o carregamento de módulos YUI 1
var yui1ConfigFn = function (me) {
    if (/-skin|reset|fonts|grids|base/.test(me.name)) {
        me.type = 'css';
        me.path = me.path.replace(/\.js/, '.css');
        me.path = me.path.replace(/\/yui2-skin/, '/assets/skins/sam/yui2-skin');
    }
};

// Função para configurar o carregamento de módulos YUI 2
var yui2ConfigFn = function (me) {
    // ... configuração dos módulos YUI 2 ...
};

// Configuração do objeto YUI_config para carregamento do YUI
YUI_config = {
    "debug": false,
    "base": "https:\/\/ucaplus.alterdata.com.br\/lib\/yuilib\/3.17.2\/",
    // ... outras configurações do YUI ...
};

// Definição de objetos para carregar módulos YUI
M.yui.loader = { modules: {} };