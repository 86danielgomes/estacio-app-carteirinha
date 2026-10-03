# 🎓 Estácio - Campus Digital (Carteirinha do Aluno)

Aplicação web recriada com fidelidade pixel-perfect das 3 telas do aplicativo da Estácio, desenvolvida em **React + Vite** e pronta para publicação direta no **Vercel**.

---

## 📱 Fluxo de Navegação Implementado

1. **Tela 1 (Menu Principal)**:
   - Barra de status nativa (13:16, Wi-Fi, sinal de celular, bateria 23%).
   - Cabeçalho azul Estácio com campo de busca em tempo real (`Pesquise por um atalho`).
   - Seção **Perfil** com ícones 3D autênticos:
     - 🌟 **Carteirinha** *(ao clicar, abre a **Tela 2**)*
     - Meus dados
     - Política de privacidade
     - Envio de documentação
     - Configurações de atendimento
     - Notificações (badge 1)
   - Seção **Meu curso** com os 9 atalhos acadêmicos.
   - Barra de navegação inferior com Início, Financeiro, assistente **Tácia** (com balão interativo ao clicar) e aba **Menu** ativa.

2. **Tela 2 (Perfil com Carteirinha Compacta)**:
   - Cabeçalho com botão voltar `<` (retorna para a Tela 1) e logo Estácio.
   - Cartão escuro degradê com a foto original da aluna **Rebeca Santos Souza**, curso Gestão de e-commerce, validade Mar 2027 e matrícula 2025 0445 2397 (com botão de copiar).
   - ↗️ Botão **Expandir carteirinha** *(ao clicar, abre a **Tela 3**)*.
   - Seção **Minha conta** com Conquistas e recompensas, lista de opções e link **Sair**.

3. **Tela 3 (Carteirinha Expandida)**:
   - Cabeçalho com botão voltar `<` (retorna para a Tela 2) e logo Estácio.
   - Cartão expandido completo contendo:
     - Foto da aluna e selo verde **ATIVO**
     - CPF: `492.765.218-10` | Nascimento: `17 Jun 2000`
     - Curso: `Gestão de e-commerce`
     - Tipo de curso: `Graduação` | Modelo de ensino: `Total ead`
     - Campus: `Polo distr estação tatuapé - são paulo - sp`
     - Validade: `Mar 2027` | Matrícula: `2025 0445 2397` (com botão de copiar interativo)
   - ↙️ Botão **Recolher carteirinha** *(ao clicar, retorna para a **Tela 2**)*.

---

## 🚀 Como Hospedar no Vercel

O projeto já inclui o arquivo [`vercel.json`](file:///C:/Users/DanielGomes/.gemini/antigravity-ide/scratch/estacio-carteirinha-app/vercel.json) configurado para Single Page Applications.

### Opção 1: Deploy Instantâneo via Terminal (Mais Rápido)
No terminal, dentro da pasta do projeto, rode:
```bash
npx vercel
```
- Pressione `Enter` para confirmar as opções padrão detectadas pelo Vite.
- Em segundos, seu aplicativo estará online com link oficial `.vercel.app`.

### Opção 2: Pelo GitHub + Painel Vercel
1. Inicialize o repositório git e suba para seu GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: Estacio carteirinha app"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git push -u origin main
   ```
2. Acesse [vercel.com/new](https://vercel.com/new).
3. Conecte sua conta do GitHub e selecione o repositório.
4. O Vercel detectará o framework **Vite** automaticamente.
5. Clique em **Deploy**.

---

## 💻 Como Rodar Localmente

1. Entre na pasta:
   ```bash
   cd estacio-carteirinha-app
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra no navegador: `http://localhost:5173/`
