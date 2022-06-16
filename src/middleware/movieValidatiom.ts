import { body } from "express-validator";

export const movieCreateValidator = () => {
  return [
    body("title")
      .isString()
      .withMessage("titulo obrigatorio")
      .isLength({ min: 5 })
      .withMessage("o titulo precisa ter no minimo 5 caracteres"),
      body('rating').isNumeric().withMessage('a avaliação precosa ser um numero')
      .custom((value:number)=>{
        if (value<1 || value>10) {
            throw new Error(" a nota precisa ser entre 1 e 10");
        }
        return true
      }),
      body('description').isString().withMessage('a descrição é obriatória'),
      body('director').isString().withMessage('nome do diretor'),
      body('poster').isURL().withMessage('o poster percisa ser uma url')

  ];
};
