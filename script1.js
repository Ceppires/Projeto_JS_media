const students = [
    {
      name: "Luiz",
      n1: 10,
      n2: 9,
    },
    {
      name: "Alexandra",
      n1: 7,
      n2: 8,
    },
    {
      name: "Carlos",
      n1: 5,
      n2: 7,
    },
    {
      name: "Roberta",
      n1: 10,
      n2: 9,
    },
  ]

  function media(student) {
    let average = (student.n1 + student.n2) /2
    let result = average >= 7

    if (result) {
      alert(`A média do(a) aluno(a) ${student.name} é: ${average}\n Parabens, ${student.name} ! Você foi Aprovado(a) no Curso!`)
    } else {
      alert(`A média do(a) aluno(a) ${student.name} é: ${average}\n Não foi dessa vez, ${student.name} ! Tente novamente!`)
    }
  }
  for (let student of students) {
    media(student)
  }

