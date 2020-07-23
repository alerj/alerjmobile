## AlerjMobile

### Requisistos

- Para conexão com um servidor SQLServer(o banco atual do SGUS), é necessária a instalação do PDO `pdo_dblib`
- Extensão `php-ldap` instalada no PHP fpm utilizado para o aplicativo

### Buscas PRODERJ

#### Busca de deputados

A busca é feita e guardada em cache
- Link original
```
http://apialerj.rj.gov.br/api/deputadoservice
```
- Busca a partir do AlerjMobile (GET)
```
http://apiportal.alerj.rj.gov.br/api/v1.0/proderj/api/deputadoservice
```

### Requisições LDAP

As configurações específicas dessa requisição estão em `config/ldap.php`.

#### Validação LDAP(login e senha)

Valida login e senha no AD.

A API é acessada a partir de uma requisição POST, contendo os atributos `username` e `password` no corpo. Na URL, é necessária uma chave, a `LDAP_ROUTE_PREFIX` do `.env`.

```
https://apiportal.alerj.rj.gov.br/api/v1.0/ldap/<LDAP_ROUTE_PREFIX>/login
```

#### Validação LDAP(login e senha)

Retorna detalhes de um usuário no AD.

A API é acessada a partir de uma requisição POST, contendo os atributos `username` e `password` no corpo. Na URL, é necessária uma chave, a `LDAP_ROUTE_PREFIX` do `.env`.

```
https://apiportal.alerj.rj.gov.br/api/v1.0/ldap/<LDAP_ROUTE_PREFIX>/user
```

### Requisições de permissão(SGUS)

Retorna buscas de determinados usuários. É necessário configurar as variáveis dessa conexão no `.env`

```
DB_ALERJ_ADM_USER_HOST=
DB_ALERJ_ADM_USER_PORT=
DB_ALERJ_ADM_USER_DATABASE=
DB_ALERJ_ADM_USER_CONNECTION=
DB_ALERJ_ADM_USER_USERNAME=
DB_ALERJ_ADM_USER_PASSWORD=
```

#### Permissões no SGUS

Retorna a lista de permissões para um usuário em um sistema.

A API é acessada a partir de uma requisição POST, contendo os atributos `username` e `system` no corpo. Na URL, é necessária uma chave, a `ADM_USER_ROUTE_PREFIX` do `.env`.

```
https://apiportal.alerj.rj.gov.br/api/v1.0/adm-user/<ADM_USER_ROUTE_PREFIX>/permissions
```

#### Perfis no SGUS

Retorna a lista de permissões para um usuário em um sistema.

A API é acessada a partir de uma requisição POST, contendo os atributos `username` e `system` no corpo. Na URL, é necessária uma chave, a `ADM_USER_ROUTE_PREFIX` do `.env`.

```
https://apiportal.alerj.rj.gov.br/api/v1.0/adm-user/<ADM_USER_ROUTE_PREFIX>/profiles
```