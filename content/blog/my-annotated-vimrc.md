---
title: 'My Annotated Vimrc'
date: '2020-11-26T00:00:00-06:00'
---

I am obsessed with Vim. Folks who've programmed with me, or attended the Vim
Chicago Meetup when I was an active organizer, can attest. Vim is part of my
developer origin story and it's part of my identity as a developer. Any skill I
have as a programmer started with gaining competence in Vim.

Should you learn Vim? I think so. I hope to make that case in an upcoming post.

A Vim developer is only as good as their Vim configuration file,
their `.vimrc`[^1]. In that spirit, here is my personal `.vimrc` with
annotations.

### My Vimrc

My `.vimrc` is broken up into four groups: settings, mappings, abbreviations,
and filetype-specific settings. If you open this file in Vim, you'll see why:
it's long, and it's folded up by groups as a default. This is one of many tips
I picked up reading [Learn VimScript The Hard
Way](https://learnvimscriptthehardway.stevelosh.com/) by Steve Losh, and the
dotfiles of programmers I admire.

```vim
"  ____ ____ ____ ____
" ||j |||a |||k |||e ||
" ||__|||__|||__|||__||
" |/__\|/__\|/__\|/__\|
"
" Jake Worth's .vimrc
"
"
" Settings ---------------------- {{{
" Turn on syntax highlighting
syntax on

" Allow customization of indentation by file type
filetype plugin indent on

" Ignore casing of normal letters
set ignorecase

" Ignore casing when using lowercase letters only
set smartcase

" Show line numbers
set number

" Start with all folds folded (like in this file)
set foldlevelstart=0

" Allow a separate .vimrc in any directory
set secure
set exrc

" Use a visual bell instead of beeping
set visualbell

" Command-line completion operates in an enhanced mode
set wildmenu
set wildmode=list:longest,full

" Vertical splits split right
set splitright

" Splits split below
set splitbelow

" Don't abandon hidden buffers (I need them)
set hidden

" GUI settings (I don't use; duped from Hashrocket Dotmatrix)
set guifont=Monaco:h16
set guioptions-=T guioptions-=e guioptions-=L guioptions-=r

" Use Bash as my shell
set shell=bash

" Use railscasts colorscheme; tried and true
color railscasts

" Allow Vim-JSX to highlight *.js files
let g:jsx_ext_required = 0

" Allow MatchTagAlways to highlight JSX
let g:mta_filetypes = {
    \ 'html' : 1,
    \ 'xhtml' : 1,
    \ 'xml' : 1,
    \ 'jinja' : 1,
    \ 'javascript.jsx' : 1,
    \}

" Turn on vim-closetag for JavaScript
let g:closetag_filenames = '*.html,*.xhtml,*.phtml,*.js'

" Configure vim-mix-format
let g:mix_format_on_save = 1
let g:mix_format_options = '--check-equivalent'
let g:mix_format_silent_errors = 1
" }}}

" Mappings ---------------------- {{{
" Disable arrow keys (there are better versions in Vim)
noremap <up> <nop>
noremap <down> <nop>
noremap <left> <nop>
noremap <right> <nop>

" Substitute a highlighted word (h/t Vidal Ekechukwu)
vnoremap <c-r> "hy:%s/<c-r>h//gc<left><left><left>

" Search for word under cursor with RipGrep
nnoremap <leader>g :<C-U>execute "Rg ".expand('<cword>') \| cw<CR>

" Enable quick Vim help lookup
nnoremap <f1> :help <c-r><c-w><cr>

" Remove ^M linebreaks
nnoremap gsp :e ++ff=dos<cr>:w<cr>

" Open vimrc.local
nnoremap <leader>ev :vsplit $MYVIMRC.local<cr>

" Source vimrc.local
nnoremap <leader>sv :source $MYVIMRC.local<cr>

" Dillon and Jake Sort™
vnoremap <f5> :sort<cr>

" Vidal and Dorian Sort™
vnoremap <silent> gs :sort<cr>

" Run Rubocop
nnoremap <leader>ru :! rubocop -a % <cr>

" Insert a UUID with Ruby
nnoremap ruid :read !ruby -e "require 'securerandom'; p SecureRandom.uuid"<cr>

" Set a default search command for FZF
let $FZF_DEFAULT_COMMAND = 'ag --hidden -l -g ""'

" Map common FZF commmands
nnoremap <silent> <c-b> :Buffers<cr>
nnoremap <silent> <c-g>g :Ag<cr>
nnoremap <silent> <c-p> :Files<cr>

" Yank file and line number under cursor (great for code reviews)
nnoremap <silent> yfl :let @" = join([expand('%'), line(".")], ':')<cr>

" Show me the Vim highlight for word under a cursor (for writing Vim plugins)
" https://jordanelver.co.uk/blog/2015/05/27/working-with-vim-colorschemes/
nmap <leader>sp :call <SID>SynStack()<CR>
function! <SID>SynStack()
  if !exists("*synstack")
    return
  endif
  echo map(synstack(line('.'), col('.')), 'synIDattr(v:val, "name")')
endfunc
" }}}

" Abbreviations ---------------------- {{{
" Abbreviate my email
iabbrev @@ jake@jakeworth.com
" }}}

" Filetype settings ---------------------- {{{
augroup filetype_crontab
  autocmd!

  "Allow Vim to overwrite the crontab
  autocmd FileType crontab setlocal bkc=yes
augroup END

augroup filetype_go
  autocmd!
  " Run tests
  autocmd FileType go nnoremap <leader>gt :GoTest<cr>

  " Run test under cursor
  autocmd FileType go nnoremap <leader>gtf :GoTestFunc<cr>

  " Run linter
  autocmd FileType go nnoremap <leader>gl :GoLint<cr>

  " Load documentation for word under cursor
  autocmd FileType go nnoremap <leader>gd :GoDoc<cr>

  " Run program
  autocmd FileType go nnoremap <leader>gr :GoRun<cr>
augroup END

augroup filetype_docs
  autocmd!

  " Turn on spelling
  autocmd BufNewFile,BufRead *.md,*.rdoc,*.txt setlocal spell

  " Turn off numbers
  autocmd BufNewFile,BufRead *.md,*.rdoc,*.txt setlocal nonu
augroup END

augroup filetype_vim
  autocmd!
  " Fold this file on markers
  autocmd FileType vim setlocal foldmethod=marker
augroup END

augroup filetype_haml
  autocmd!
  " Line up HAML linebreak pipes
  autocmd FileType haml vnoremap <silent> ta :Tabularize /\|<cr>
augroup END

augroup filetype_all
  autocmd!

  " Print a quote when Vim opens
  autocmd VimEnter * :echo "\"Real artists ship.\" –Steve Jobs"
augroup END
" }}}
```

### Conclusion

What have I missed? What could I be doing better? I welcome pull request on my
[dotfiles](https://github.com/jwworth/dotfiles) repo. Even if I don't merge the
changes, we'll both learn something.

Interested in copying this file on your root directory, along with the rest of
my [dotfiles](https://github.com/jwworth/dotfiles)? That's not a bad a idea.
Alternatively, you could build your own from scratch. You'll learn more about
what you value as a developer in that simple exercise than you'll learn from a
thousand Vim blog posts like this one. Good luck!

[^1]: Ever wondered what `rc` stands for? Here's [my answer](https://til.hashrocket.com/posts/zf2nzhqnsx-meaning-of-rc-in-a-dotfile).
