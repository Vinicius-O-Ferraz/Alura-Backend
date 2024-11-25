# Alura-Backend

# Descrição

Este repositório visa registrar meus estudos iniciais no framework javascript NodeJs. Ele se baseia na imersão dev da Alura que deve acontecer do dia 18/11 até 22/11. O conteúdo programado pode ser visto abaixo:

* Aula 01: Desvendando APIs e Servidores

* Aula 02: Criando e Estruturando sua Primeira API com GET e Banco de Dados

* Aula 03: Conectando sua API ao MongoDB: Estrutura, Conexão e Refatoração

* Aula 04:Implementando Armazenamento e Upload de Imagens

* Aula 05: Publicando na Google Cloud: Configuração de API e Integração com Gemini

# Aula 1

Essa aula foi uma introdução ao framework nodejs. Nela fizemos a instalação, executamos um servidor e aprendemos sobre conceitos básicos como servidores (Sistema de computador projetado para processar solicitações e fornecer dados a outros computadores em uma rede local ou através da internet) e rotas (rotas são associações entre URLs específicas e o código que será executado quando essas URLs forem acessadas).

# Aula 2

Nesta segunda aula, criamos uma API simples para a consulta de dados em um banco de dados. Adicionalmente, aprendemos sobre JavaScript Object Notation (JSON), que é uma forma muito elegante de trabalhar com objetos. Nessa notação, temos chaves e atributos que formam pares de valores. Adicionalmente, aprendemos sobre o MongoDb que é um banco de dados não relacional baseado em documentos que usa objetos JSON como sua base.

# Aula 3

Na terceira aula focamos mais no Mongodb, trabalhamos na integração com o MongoDb por meio do Atlas. Isso pode ser feito de maneira simples: criamos um cluster de dados no Atlas e usamos a String de conexão do cluster para integrá-lo ao Node. Além disso, mudamos um pouco os métodos das APIs para que o MongoDb seja responsável pela persistência dos registros. Também aprendemos a fazer solicitações REST para a API usando o ThunderClient (extensão VsCode).

# Aula 4

Nessa penúltima aula, implementamos com ajuda das bibliotecas Mutter e do FileSystem uma maneira de mandar as imagens na solicitação POST. Para isso foi necessário usar outro programa para fazer as requisições: o Postman. 

# Aula 5

Nesta última aula, a mais desafiadora e importante até agora, aprendemos a usar a API de Gemini para criar as descrições de imagens na requisição do JSON. Essa API combina a geração de texto procedural com um algoritmo de visão computacional que escaneia a imagem. O produto final é uma descrição detalhada e fidefigna de maneira automática. 

Adicionalmente, fizemos a integração com o FrontEnd de outro projeto para que as requisições do BackEnd sejam consumidas pelo FrontEnd. A interface da aplicação se assemelha bastante com a do Instagram. 

# Conclusão e Próximos passos

Este repositório foi um marco inicial nos estudos de programação BackEnd com Node.js, cobrindo desde conceitos básicos de APIs e servidores até integrações avançadas com o MongoDB e a API de Gemini. Ao longo das aulas, aprendemos a estruturar APIs, manipular dados em bancos de dados não relacionais, lidar com armazenamento e upload de imagens, e integrar o BackEnd a um FrontEnd funcional. Esses conhecimentos formam uma base sólida para explorar tópicos mais avançados, como autenticação de usuários, gerenciamento de permissões, desenvolvimento de APIs RESTful robustas e escaláveis, e a construção de microsserviços. Os próximos passos podem incluir o estudo de frameworks como Express.js, aprofundamento em segurança com JWT, implementação de testes automatizados e implantação de aplicações em ambientes de produção utilizando ferramentas como Docker e Kubernetes.








