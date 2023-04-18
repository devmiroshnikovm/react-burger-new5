# react-burger-new5

когда store когда state?

state

если мы в компоненте используем несколько useState
const [name, setName] = useState('Вася');
const [age, setAge] = useState(30);
const [email, setEmail] = useState('email');

будет создан один обьект state
{
name: 'Вася',
age: 30,
email: 'email',
}

state доступен по умолчанию только внутри компонента создавшего стейт
если нам нужно передать стейт мы передаем его пробросами через props

Store

создается один раз в index.js как <Provider store={store}> и доступен глобально во всем APP

данные в store записывает reducer
если у нас несколько reducers:

countReducer:
const initialState = {
count: 0,
};

ingredientsReducer:
const initialState = {
listIngredients: [],
};

объединенных через root:
const rootReducer = combineReducers({
counter: counterReducer,
ingredients: ingredientsReducer,
});

то store будет выглядеть как:

{
counter: {
count: 0
},
ingredients: {
listIngredients: [],
}

}

это глабальный объект, доступный внутри всего APP

если нам нужно передать сложную логику или async мы передаем
в dispatcher не простой объект вида
{
type: GET_REQUEST,
}
а функцию

dispatcher(asyncComplexFunction()), которая по итогу возвращает
{
type: GET_REQUEST,
}
например вместе с данными data, которые по итогу попадают в store

Вопрос
когда использовать store когда state?

state:
если данные нужны только внутри одного локального компонента
если нам не нужна сложная логика которую проще подключить через middleware

store:
если нам нужно хранить данные глобально
если нам нужны middleware
мы можем использовать синтаксис redux-toolkit чтобы упростить написание actions и reducers

логичный вопрос
мы же не можем знать насколько будет развиваться наше приложение?
совсем простые вещи можем хранить в state
остальные через упрощенный синтаксис в store?

Вопросы про работу:

нам нужно хранить по заданию вот эти сущности в store:

список всех полученных ингредиентов:
тут понятно мы получаем один раз данные в APP и используем их в child компонентах без проброса через props

список всех ингредиентов в текущем конструкторе бургера
...

объект текущего просматриваемого ингредиента:
в моем случае это удобно чтобы не пробрасывать ингредиент в модельное окно

объект созданного заказа:
...

а данные лежат в другом stor
const listOfFetchedIngredients = [
{
name: "Alice",
id: 1,
value: 42
},
{
name: "Bob",
id: 2,
value: 37
},
{
name: "Carol",
id: 3,
value: 55
}
];

если по нормальному нужно в druggable items передавать ТОЛЬКО id
const listOdDroppedIngredients = [
{
id: 1,
uniqID: "unique-1"
},
{
id: 2,
uniqID: "unique-2"
},
{
id: 3,
uniqID: "unique-3"
}
]

const listOfUpdatedIngredients = [
{
id: 1,
name: "Alice",
value: 42
uniqID: "unique-1"
},
{
id: 1,
uniqID: "unique-2"
name: "Alice",
value: 42
},
{
id: 3,
uniqID: "unique-3"
name: "Carol",
value: 55
}
]
каким образом организовать передачу данных?
