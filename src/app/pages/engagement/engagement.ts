import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Meta, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-engagement',
  imports: [MatIconModule, CommonModule, RouterModule],
  templateUrl: './engagement.html',
  styleUrl: './engagement.scss',
})
export class Engagement {
  sections: any = [
    {
      title: "Solution Consulting",
      headline: "Strategy Before Systems",
      regulatory_durability_statement:
        "The result is a structured, executable intelligence blueprint aligned to regulatory expectations.",
      cta: "Begin with Strategic Intelligence Consulting"
    },

    {
      title: "Proof of Concepts (PoCs)",
      headline: "Validate Structural Assumptions Before They Become Risk",
      cta: "Run a Structural PoC"
    },

    {
      title: "Design & Development",
      headline: "Built for Scrutiny — Not Just Functionality"
    },

    {
      title: "Data Quality Checking — And What Happens Next",
      headline: "Validation Is Governance in Motion"
    },

    {
      title: "Knowledge Model",
      headline: "Knowledge Must Become Infrastructure"
    },

    {
      title: "How Engagements Progress",
      headline: "A Structured Maturity Framework",
    },

    {
      title: "Training & Handover",
      headline: "Ownership Is the Final Deliverable",
      cta: "Schedule a Strategic Consultation"
    }
  ];

  groupedCards: any[][] = [];
  currentIndex = 0;

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {

    // Change Page Title
    this.titleService.setTitle(
      'Engagement Architecture | Care2Data'
    );

    // Change Meta Description
    this.metaService.updateTag({
      name: 'description',
      content: 'Discover Care2Data engagement architecture and service offerings including solution consulting, PoCs, design & development, and training for clinical data intelligence.'
    });

    // Change Meta url
    this.metaService.updateTag({
      name: 'og:url',
      content: 'https://gokulgovindharaj.github.io/Care2Data-Website/#/engagement'
    });

    // Change Keywords
    this.metaService.updateTag({
      name: 'keywords',
      content: 'Engagement architecture, Clinical data consulting, Healthcare solution consulting, Proof of concepts, Clinical data development, Data quality solutions, Healthcare training, Clinical data intelligence services'
    });

    // Open Graph Title
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Engagement Architecture | Care2Data'
    });

    // Open Graph Description
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Discover Care2Data engagement architecture and service offerings including solution consulting, PoCs, design & development, and training for clinical data intelligence.'
    });

    // Auto-advance sections
    setInterval(() => {
      this.next();
    }, 15000);

  }

  next() {
    if (this.currentIndex < this.sections.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.sections.length - 1;
    }
  }

  goTo(index: number) {
    this.currentIndex = index;
  }
}
