let data = [
    {
        name:'Sachin',
        age: '19'
    },
    {
        name:'Tarun',
        age: '20'
    },
    {
        name:'Ashish',
        age: '21'
    },
    {
        name:'Ashish',
        age: '21'
    },
    {
        name:'Ashish',
        age: '21'
    },
    {
        name:'Ashish',
        age: '21'
    },
    
];

const infoo = document.querySelector("#info");

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
});

infoo.innerHTML = details.join('\n');