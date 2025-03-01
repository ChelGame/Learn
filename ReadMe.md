# Учебный проект

## Шпоргалка по командам гит

1. git - выводит подсказку по всем командам git.
2. git show \[index] - выводит информацию о коммите. Если индекс не указан, выводит информацию о последнем коммите.
   - --pretty=fuller - выводит более подробную информацию о коммите (включая даты и авторов).
3. git add \[file] - добавляет файл или изменения в файл в индекс.
   - git add . - добавляет все изменения в текущей директории и её поддиректориях.
   - git add -A - добавляет все изменения в проекте, включая удаление файлов.
   - git add \[directory] - добавляет все файлы и изменения в указанной директории.
4. git commit - коммитит изменения.
   - -m "\[message]" - добавляет сообщение к коммиту.
   - -A - коммитит все изменения, не требуя предварительного выполнения git add.
5. git restore \[file] - восстанавливает файл из последнего коммита. 
   - --source=<commit\> - восстанавливает файл из другого коммита.
   - --staged - отменяет изменения из индекса.
6. git status - показывает текущий статус репозитория, включая измененные файлы, которые еще не добавлены в индекс, а также изменения, готовые к коммиту.
7. git config \[option] \[value] - настраивает параметры git.
   - git config --global user.name "Your Name" - устанавливает имя пользователя для всех репозиториев.
   - git config --global user.email "you@example.com" - устанавливает email пользователя.
   - git config --global core.editor "disk:/Notepad++/notepad++.exe". - устанавливает редактор по умолчанию
8. git rm \[file] - удаляет файл из репозитория и добавляет его в индекс для удаления в следующем коммите.
   - -f — принудительно удаляет файл, даже если изменения в нем не были сохранены.
   - -r — удаляет директорию и все её содержимое.
   - --cached — удаляет файл только из индекса, но оставляет его в рабочем каталоге.
9. git mv \[old_file] \[new_file] — переименовывает файл или перемещает его в другую директорию. Это эквивалентно выполнению git rm \[old_file] и git add \[new_file] в одном шаге.

## Шпоргалка по оформлению .md файлов


### Заголовки
\# Заголовок
\## Заголовок поменьше
...

### Списки
1\. список
\- тоже список
...

### Параграфы и новые строки 
делаются через пустую строку и два пробела соответственно

### Выделение текста

\*курсив*  
\_курсив_

\*\*жирный**  
\_\_жирный__

\*\*\*жирный курсив***  
\_\_\_жирный курсив___

\~~зачеркнутый~~

### Ссылки
#### Ссылка с заголовком
\[Текст ссылки]<адрес ссылки>


#### Якорь
\[Перейти к Заголовку 1](#title1)
\## \<a id="title1">Заголовок 1\</a>

#### Автоматическая ссылка
\<http://example.com/>

### Картинки

!\[Текст описания](Адрес картинки)

### Код

\```
Блок кода
```

\``` JavaScript
console.log("Hi");
```

### Все остальное
<https://gist.github.com/Jekins/2bf2d0638163f1294637>