---
layout: default
title: Home
---

<section class="hero-header">
  <span class="section-label">Applied Ontology · Knowledge Representation · Formal Modeling</span>
  <h1>Better ontologies don't just represent the world. They help us see more of it.</h1>
  <p class="hero-subtitle">
    Postdoctoral Research Associate &amp; Ontologist at the <strong>University at Buffalo</strong> · Clinical and Translational Science Ontology Consortium (CTSOC)
  </p>
  <div class="identity-links">
    <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>
    <a href="https://orcid.org/{{ site.author.orcid }}" target="_blank" rel="noopener">ORCID</a>
    <a href="{{ site.author.scholar }}" target="_blank" rel="noopener">Google Scholar</a>
    <a href="{{ site.author.linkedin }}" target="_blank" rel="noopener">LinkedIn</a>
    <a href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener">GitHub</a>
  </div>
</section>

<!-- <div class="thesis-box">
  <span class="section-label">Research Thesis &amp; Direction</span>
  <p>
    Information systems fail to interoperate not merely because they use different schemas, but because they encode incompatible assumptions about what exists, how things persist through change, and what makes an event occur.
  </p>
  <p>
    My work investigates the formal ontological foundations of <strong>events, systems, and dispositions</strong>—developing rigorous conceptual models that bridge top-level philosophy with real-world data integration in clinical research, energy systems, and AI-assisted ontology engineering.
  </p>
</div> -->

<!-- <section>
  <h2>...</h2>
  <p>
    I am an applied ontologist working at the intersection of formal ontology, conceptual modeling, and semantic interoperability. Currently, I am a Postdoctoral Research Associate at the <strong>University at Buffalo</strong>, contributing to the <a href="https://ctsontologyconsortium.org/" target="_blank" rel="noopener">Clinical and Translational Science Ontology Consortium (CTSOC)</a>, where I develop ontologies to represent translational research across its scientific, regulatory, and social dimensions.
  </p>
  <p>
    Previously, I served as a Research and Development Specialist and Lead Ontologist at Samsung R&amp;D Institute Brazil—designing knowledge graphs and hybrid LLM-ontology architectures for health and well-being—and led ontology engineering efforts in international industry-academia collaborations between UFRGS and the University of Oslo (<a href="https://www.petwin.org" target="_blank" rel="noopener">PeTWIN</a> and Digital Geosciences).
  </p>
  <p>
    Within the broader ontology community, I serve on the Editorial Board of <a href="https://journals.sagepub.com/editorial-board/APO" target="_blank" rel="noopener"><em>Applied Ontology</em></a>, on the Executive Council of the <a href="https://iaoa.org/index.php/organization/executive-council/" target="_blank" rel="noopener">International Association for Ontology and its Applications (IAOA)</a>, and as Program Committee Chair for <a href="https://www.inf.ufrgs.br/ontobras/pt/organizacao-ontobras-2026/" target="_blank" rel="noopener">ONTOBRAS 2026</a>.
  </p>
</section> -->

<!-- <section>
  <h2>Selected Work</h2>
  <ul class="work-list">
    {% assign selected_pubs = site.data.publications | where: "selected", true %}
    {% for pub in selected_pubs %}
    <li class="work-item">
      <div class="work-meta">
        <span class="badge">{{ pub.year }}</span>
        <span class="badge badge-neutral">{{ pub.type_label }}</span>
      </div>
      <div class="work-title">
        {% if pub.url != "" %}
          <a href="{{ pub.url }}" target="_blank" rel="noopener">{{ pub.title }}</a>
        {% else %}
          {{ pub.title }}
        {% endif %}
      </div>
      <div class="work-authors">{{ pub.authors }}</div>
      <div class="work-venue">{{ pub.venue }}</div>
      {% if pub.relevance != "" %}
        <div class="work-note">{{ pub.relevance }}</div>
      {% endif %}
    </li>
    {% endfor %}
  </ul>
  <p style="margin-top: 1.5rem;">
    <a href="{{ '/publications/' | relative_url }}" class="mono">View full publications list &rarr;</a>
  </p>
</section> -->
