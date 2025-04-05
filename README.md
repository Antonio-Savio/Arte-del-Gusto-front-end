# **Arte Del Gusto - Front-End**

## 💡 **Sobre**
O **Arte Del Gusto** é um sistema web desenvolvido para a gestão de uma delicatessen. A aplicação permite o gerenciamento eficiente de pedidos, produtos, categorias e usuários. O front-end foi construído com **Next.js** e oferece uma experiência fluida e intuitiva para o usuário. É integrado com um [sistema mobile](https://github.com/Antonio-Savio/Arte-del-Gusto-mobile), onde os pedidos são cadastrados, e posteriormente gerenciados no painel web.

---

## 🔗 Links da aplicação
- [Deploy front-end](https://artedelgustodelicatessen.vercel.app)
- [Repositório back-end](https://github.com/Antonio-Savio/Arte-del-Gusto-back-end)
- [Repositório mobile](https://github.com/Antonio-Savio/Arte-del-Gusto-mobile)

---

## ✅ **Destaques**
- **Autenticação JWT**: Login seguro com tokens armazenados em cookies.
- **Autorização por middleware**: Controle de acesso a rotas privadas usando middleware do Next.js.
- **Integração com a parte mobile**: o [sistema mobile](https://github.com/Antonio-Savio/Arte-del-Gusto-mobile) realiza o cadastro dos pedidos, que por sua vez serão geranciados no painel web (dashboard). No painel há uma seta redonda (**⟳**), para atualizar os pedidos.
- **Painel administrativo** com múltiplas funcionalidades:
  - **Dashboard**: visão geral dos pedidos em aberto.
  - **Produtos**: cadastro, edição e exclusão de produtos.
  - **Categorias**: gerenciamento de categorias de produtos.
  - **Pedidos**: visualização dos pedidos em andamento ou finalizados.
- **Modal de detalhes**: ao clicar em um pedido, é possível visualizar detalhes, como o valor total, e concluir o pedido.
- **Manipulação de moeda**: funções utilitárias para formatar moeda para o padrão local e calcular o valor total do pedido.
- **Interface responsiva** e acessível para diferentes dispositivos.
- **Notificações em tempo real** com React Hot Toast para feedbacks rápidos.
- **Boas práticas de código** com separação clara entre responsabilidades (componentes, serviços, contextos).

---

## ⚙️ **Tecnologias Utilizadas**
- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **Axios**
- **Context API**
- **js-cookie**
- **React Hot Toast**

---

## 📁 **Estrutura do Projeto**

```
/public
  └── images/            # Imagens da aplicação, como logotipo

/src
  ├── app/               # Estrutura de rotas do Next.js 13+
  │   └── dashboard/     # Subrotas protegidas
  │       ├── categoria/     # Página de categorias
  │       ├── components/    # Componentes reutilizáveis do dashboard
  │       ├── produto/       # Página de produtos
  │       └── page.tsx       # Página de pedidos
  │       └── globals.css    # Definição das cores padrão do sistema e estilos globais
  │   └── signup/        # Página de cadastro
  │   └── page.tsx       # Página de login
  ├── components/        # Componentes reutilizáveis da interface
  ├── providers/         # Contexto de pedidos para o modal
  ├── services/          # Configuração do Axios
  │   └── app.ts         # Instância do Axios
  ├── utils/             # Funções utilitárias e tipagens
  └── middleware.ts      # Middleware de proteção de rotas privadas e públicas
```

---

## 🚀 **Como Executar o Projeto**

### **Pré-requisitos**
- Node.js
- NPM ou Yarn
- Back-end da aplicação em execução
- Banco de dados e variáveis de ambiente configurados

### **Instalação**
```bash
# Clone o repositório
git clone https://github.com/Antonio-Savio/Arte-del-Gusto-front-end.git

# Acesse o diretório do projeto
cd Arte-del-Gusto-front-end

# Instale as dependências
npm install
```

### **Variáveis de Ambiente**
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
NEXT_PUBLIC_API=http://localhost:{porta_do_back-end}
```

### **Executando o Projeto**
```bash
npm run dev
```
A aplicação estará disponível em **http://localhost:3000**

---

## 🤝 **Contribuição**
Contribuições são bem-vindas! Para colaborar:
1. Faça um fork do projeto
2. Crie uma branch com sua feature (`git checkout -b feature/sua-feature`)
3. Commit suas alterações (`git commit -m 'feat: adiciona nova feature'`)
4. Dê push na branch (`git push origin feature/sua-feature`)
5. Abra um Pull Request

---

## 📄 **Licença**
Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.

---

## 📧 **Contato**
Se tiver dúvidas ou sugestões, entre em contato:
- **Email** - [savio.aragao@hotmail.com](mailto:savio.aragao@hotmail.com)  
- **GitHub** - [Antonio-Savio](https://github.com/Antonio-Savio)  
- **LinkedIn** - [antonio-savio](https://www.linkedin.com/in/antonio-savio)