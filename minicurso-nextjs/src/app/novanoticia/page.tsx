'use client';
import TextArea from '@/components/TextArea';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';
import Link from 'next/link';
import { FormEvent } from 'react';
export default function NovaNoticia() {
  async function onSubmit(
    e: FormEvent<HTMLFormElement> & {
      target: {
        titulo: { value: string };
        descricao: { value: string };
        conteudo: { value: string };
        imagem: { value: string };
      };
    }
  ) {
    e.preventDefault();
    const titulo = e.target.titulo.value;
    const descricao = e.target.descricao.value;
    const conteudo = e.target.conteudo.value;
    const imagem = e.target.imagem.value;

    const response = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify({ titulo, descricao, conteudo, imagem }),
    });
    const noticia = await response.json();
    alert('Noticia Inserida com sucesso, titulo: ' + noticia.titulo);
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold text-center mb-8'>Nova Notícia</h1>
      <form
        className='max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6'
        onSubmit={onSubmit}
      >
        <TextInput label='Título' name='titulo' />
        <TextInput label='Descrição' name='descricao' />
        <TextArea label='Conteúdo' name='conteudo' />
        <TextInput label='URL da Imagem' name='imagem' type='url' />
        <div className='flex justify-between items-center'>
          <Link href='/'>
            <Button type='button' className='bg-gray-500 hover:bg-gray-600'>
              Voltar
            </Button>
          </Link>
          <Button type='submit'>Enviar</Button>
        </div>
      </form>
    </div>
  );
}
