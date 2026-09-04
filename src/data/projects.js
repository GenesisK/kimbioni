// Projetos reais desenvolvidos no contexto profissional atual.
// São projetos corporativos: o código-fonte não é disponibilizado publicamente
// e as descrições abaixo são propositalmente genéricas (sem nomes de sistemas
// internos, tabelas, regras de negócio ou qualquer dado sensível da empresa).
export const projects = [
  {
    id: 'automacao-lancamento-notas-fiscais',
    title: 'Automação de Lançamento de Notas Fiscais',
    technologies: ['Python', 'PyAutoGUI', 'Oracle', 'SQL'],
    description:
      'Robô de RPA desktop que automatiza o lançamento de notas fiscais em um ERP corporativo, cobrindo diferentes cenários de regras fiscais.',
    problem:
      'Lançamento de notas fiscais realizado manualmente, processo repetitivo e com variações conforme a regra fiscal de cada pedido.',
    solution:
      'Robô em Python que consulta os pedidos pendentes em banco Oracle, identifica o cenário aplicável e executa o lançamento diretamente na interface do ERP, com tratamento de exceções e notificação automática por e-mail em caso de falha.',
    result: 'Em operação, reduzindo a execução manual do processo.',
    link: null,
    isCorporate: true,
  },
  {
    id: 'automacao-cadastro-desligamento-colaboradores',
    title: 'Automação de Cadastro e Desligamento de Colaboradores',
    technologies: ['Python', 'PyAutoGUI', 'Oracle', 'SQL'],
    description:
      'Robô de RPA que automatiza o processo de entrada e saída de colaboradores, tratando os dados recebidos e realizando o cadastro/desligamento em múltiplos sistemas corporativos, incluindo Active Directory e o ERP da empresa.',
    problem:
      'Cadastro e desligamento de colaboradores exigiam tratamento manual dos dados e execução coordenada em diferentes sistemas — Active Directory, ERP e sistemas correlatos —, com risco de inconsistência entre eles.',
    solution:
      'Orquestrador em Python que valida e trata os dados do colaborador e executa, de forma independente, cada etapa de cadastro/desligamento (Active Directory, ERP corporativo, entre outros sistemas internos), com tratamento de erro isolado por etapa e notificação automática em caso de falha — evitando que um problema pontual em um sistema interrompa o processo nos demais.',
    result: 'Em operação, integrado à rotina de automações internas da empresa.',
    link: null,
    isCorporate: true,
  },
]
