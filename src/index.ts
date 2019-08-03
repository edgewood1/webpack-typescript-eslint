const obj = {
  label: "go"
}

interface Next {
  label: string
}

function myfunc(arg: Next) {
  console.log(arg);
}


myfunc(obj)
 