import alunos from '../../data/alunos';

export default function ListaAlunos(props)  {
    // const lis = alunos.map(aluno => {
    //     return <li key={aluno.id}>{aluno.id}) {aluno.nome} -> {aluno.nota}</li>
    // });

    return (
        <div>
            <ul>
                {/* lis */}
                {alunos.map(aluno => (
                    <li key={aluno.id} style={{margin: "10px"}}>{aluno.id}) <span>{aluno.nome}</span> - <span>{aluno.nota}</span></li>
                ))}
            </ul>
        </div>
    );
}