v1.0
1. Придумал и отрисовал дизайн в фигме.
2. Заверстал и разбил по компонентам.

Что нового? v1.01
1. Реализовал анимацию при ожидании даных от сервера. (https://skeletonreact.com/)
2. Отобразил первых 5 юзеров с апи.
3. Реализовал поиск пользователей по логину ( с большой/маленькой буквы )
4. Сохраняю выбраных юзеров на mockapi https://61f306f32219930017f509fd.mockapi.io/fintech-band-test/selected-users
 ( при перезгрузке данные сохраняются )
6. При добавлении юзера меняется цвет сердца и сохраняется после перезагрузки.
7. Добавил эмоджи на странице "Selected users" при отсутствии выбраных юзеров.


Баги/нужно доделать:
1. Прыгает верстка сайдбара при перезагрузке страницы.
2. Удаление юезров при клике на сердце на экране Users, работает при условии добавлении юзеров
	последовательно. Ели добавлять юзеров рандомно, удалить их можно с экрана Selected users.
( причина: нельзя добавть новый параметр в апи с юзерами, чтоб по нему сделать проверку )
3. Не понял откуда вытягивать доп. данные по юзеру, по этому пока не реализовал.
