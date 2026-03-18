import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Meta, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-knowledge-services',
  imports: [MatIconModule, CommonModule, RouterModule],
  templateUrl: './knowledge-services.html',
  styleUrl: './knowledge-services.scss',
})
export class KnowledgeServices {

  steps: any[] = [
    {
      title: "Knowledge Modelling",
      icon: "device_hub"
    },
    {
      title: "Knowledge Repository Creation",
      icon: "storage"
    },
    {
      title: "Knowledge Discovery & Reasoning",
      icon: "psychology"
    },
    {
      title: "Knowledge Management & Governance",
      icon: "gavel"
    },
    {
      title: "Training & Enablement",
      icon: "school"
    },
    {
      title: "Industry Validation & Platform Proof",
      icon: "verified"
    },
    {
      title: "End-to-End Knowledge Transformation",
      icon: "hub"
    }
  ];

  groupedCards: any[][] = [];
  currentIndex = 0;

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {

    // Change Page Title
    this.titleService.setTitle(
      'Knowledge Services | Care2Data'
    );

    // Change Meta Description
    this.metaService.updateTag({
      name: 'description',
      content: 'Explore Care2Data knowledge services including knowledge modelling, repository creation, discovery, reasoning, and governance for clinical data intelligence.'
    });

    // Change Meta url
    this.metaService.updateTag({
      name: 'og:url',
      content: 'https://gokulgovindharaj.github.io/Care2Data-Website/#/knowledge-services'
    });

    // Change Keywords
    this.metaService.updateTag({
      name: 'keywords',
      content: 'Knowledge services, Knowledge modelling, Semantic knowledge, Knowledge repository, Data governance, Knowledge discovery, AI reasoning, Clinical knowledge systems, Healthcare ontologies'
    });

    // Open Graph Title
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Knowledge Services | Care2Data'
    });

    // Open Graph Description
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Explore Care2Data knowledge services including knowledge modelling, repository creation, discovery, reasoning, and governance for clinical data intelligence.'
    });

    // Auto-advance steps
    setInterval(() => {
      this.next();
    }, 150000);

  }

  next() {
    if (this.currentIndex < this.steps.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.steps.length - 1;
    }
  }

  goTo(index: number) {
    this.currentIndex = index;
  }
}