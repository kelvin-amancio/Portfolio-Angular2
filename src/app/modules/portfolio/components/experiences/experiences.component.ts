import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiencesInterface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedor Full-Stack',
        p: 'Valgroup | Ago 2021 - Jan 2024',
      },
      text: '<p>Como Desenvolvedor de Software, tive experiência de atuação em grandes projetos de uma empresa multinacional utilizando tecnologias web/mobile, como .Net, Angular, Razor e Ionic, na qual são tecnologias que domino e possuo foco como Desenvolvedor Full-Stack.</p> <p> Minha experiência nessas áreas me permitiu desenvolver uma compreensão profunda das complexidades do desenvolvimento de sistemas Web e entregar consistentemente resultados excepcionais aos clientes.</p> <p> Ao longo da minha carreira, desenvolvi e publiquei com sucesso diversos sistemas e aplicativos, sendo alguns deles, um sistema para automação de processos via RFID, automações de esteira com Node-Red, e integrações via SalesForce, utilizando diversas tecnologias de ponta e boas práticas de codificação, padrões de projeto e arquitetura limpa.</p>',
    }
  ]);
}
