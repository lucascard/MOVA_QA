Scenario: Digitando e utilizando ENTER para buscar
Given que eu esteja no site duckduckgo
When eu digitar 'Bitcoin' na barra de pesquisa
And apertar a tecla 'Enter'
Then a página me retornará os resultados da pesquisa

Scenario: Digitando e utilizando o clique na lupa para buscar
Given que eu esteja no site duckduckgo
When eu digitar 'Bitcoin' na barra de pesquisa
And clicar na lupa para buscar
Then a página me retornará os resultados da pesquisa

Scenario: Utilizando o formulário diretamente
Given que eu esteja no site duckduckgo
When eu digitar 'Bitcoin' na barra de pesquisa
And clicar na opção 'Bitcoin' no dropdown de resultados
Then a página me retornará os resultados da pesquisa