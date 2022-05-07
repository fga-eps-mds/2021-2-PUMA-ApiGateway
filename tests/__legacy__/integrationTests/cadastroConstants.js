const areasConhecimento = global.URL_GATEWAY

module.exports = {
  success: {
    projeto: {
      name: "asdasd", problem: "asdasd", expectedresult: "asdasd", status: "Em alocacao", subjectid: 1, userid: 1, isLoading: false, knowledgeareas: [{ knowledgearea: "Probabilidade e Estatística", knowledgeareaid: 1 }, { knowledgearea: "Engenharia do Produto", knowledgeareaid: 5 }, { knowledgearea: "Gestão da Qualidade", knowledgeareaid: 4 }]
    }
  },

  fail: {
    projeto1: {
      titulo: '',
      descricao: 'Estudo relacionado a decorrencia de chuvas de mamonas que estão caindo no matagal do setor sul do Gama',
      resultadoEsperado: 'Descobrir o mistério por trás dessas chuvas de mamonas',
      areasConhecimento,
      repeatAreasConhecimento: areasConhecimento
    },
    projeto2: {
      titulo: 'Chove Mamonas no Gama?',
      descricao: '',
      resultadoEsperado: 'Descobrir o mistério por trás dessas chuvas de mamonas',
      areasConhecimento,
      repeatAreasConhecimento: areasConhecimento
    },
    projeto3: {
      titulo: 'Chove Mamonas no Gama?',
      descricao: 'Estudo relacionado a decorrencia de chuvas de mamonas que estão caindo no matagal do setor sul do Gama',
      resultadoEsperado: '',
      areasConhecimento,
      repeatAreasConhecimento: areasConhecimento
    },
    projeto4: {
      titulo: 'Chove Mamonas no Gama?',
      descricao: 'Estudo relacionado a decorrencia de chuvas de mamonas que estão caindo no matagal do setor sul do Gama',
      resultadoEsperado: 'Descobrir o mistério por trás dessas chuvas de mamonas',
      areasConhecimento: ''
    }
  }
}