const task = () => {
    return src('файл с которым работаем')
        .pipe(pluginOne()) // Обработка первым плагином
        .pipe(pluginTwo()) // Обработка вторым плагином
        .pipe(pluginN()) // Обработка ещё каким-нибудь плагином
        .pipe(dest('путь, по которому расположим обработанный файл'));
};