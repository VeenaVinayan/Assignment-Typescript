// Utility Types
//1. Readonly
interface Todo{
    title:string;

}
const todo: Readonly <Todo>={
      title:"Delete inactive users !",
}
console.log(todo.title);
//2.Required
interface Props{
    a:number;
    b?:string;
}
const obj : Required <Props> ={
     a:25,
     b:"Brototype",
}
const obj1 : Props ={
    a:35,
};
type UserData ={
    name:string,
    age:number,
}
console.log("Values 0f obj1 ="+obj1.a);
console.log("values = "+obj.a+" "+obj.b);
//3. Partial
const obj2: Partial <UserData>={
    name:"veena",
}
console.log("Value ::"+obj2.name);
//4. Pick
interface Todo1{
     title:string;
     description:string;
     completed: boolean;
}
type TodoPreview = Pick<Todo1, "title" | "completed">;
const todo1:TodoPreview ={
    title:"Clean Room",
    completed:false,
};
console.log("Values :: "+todo1.title+ " "+todo1.completed);
const todo2:Pick<Todo1,"title" | "description"> ={
 title:"Make Room",
 description:"After clean , make room tidy",
};
console.log("Object values ::"+todo2.title,todo2.description);
// 5. Record
type CatName = "Miffy" |"Boris"|"Mordered";
interface CatInfo{
     age:number;
     breed:string;
}
const cats : Record<CatName,CatInfo> ={
      Miffy: {age:10,breed:"Persian"},
      Boris:{age:2,breed:"Maine Coon"},
      Mordered:{age:3,breed:"British Shorthair"}
};
console.log(cats.Miffy);
console.log(cats.Mordered);
