var papers = [
  {
    authors: "B. Balle, J. Bell, A. Gascon, and K. Nissim",
    title: "The Privacy Blanket of the Shuffle Model",
    pdfurl: "https://arxiv.org/pdf/1903.02837",
    where: "International Cryptology Conference (CRYPTO), 2019",
    links: [
      {
        name: "arXiv",
        url: "https://arxiv.org/abs/1903.02837"
      }
    ]
  },
  {
    authors: "Y.-X. Wang, B. Balle, and S. Kasiviswanathan",
    title: "Subsampled Rényi Differential Privacy and Analytical Moments Accountant",
    pdfurl: "https://arxiv.org/pdf/1808.00087",
    where: "Artificial Intelligence and Statistics Conference (AISTATS), 2019",
    links: [
      {
        name: "arXiv",
        url: "https://arxiv.org/abs/1808.00087"
      }
    ],
    extra: "<br /><i style='font-size: 0.9em;'>(<b>Notable Paper Award; Oral Presentation</b>)</i>"
  },
  {
    authors: "B. Balle, P. Panangaden, and D. Precup",
    title: "Singular Value Automata and Approximate Minimization",
    pdfurl: "https://arxiv.org/pdf/1711.05994",
    where: "Mathematical Structures in Computer Science, 2019",
    links: [
      {
        name: "doi",
        url: "https://doi.org/10.1017/S0960129519000094"
      },
      {
        name: "arXiv",
        url: "https://arxiv.org/abs/1711.05994"
      }
    ]
  },
  {
    authors: "B. Balle, G. Barthe, and M. Gaboardi",
    title: "Privacy Amplification by Subsampling: Tight Analyses via Couplings and Divergences",
    pdfurl: "https://arxiv.org/pdf/1807.01647",
    where: "Neural Information Processing Systems (NeurIPS), 2018",
    links: [
      {
        name: "arXiv",
        url: "https://arxiv.org/abs/1807.01647"
      }
    ]
  },
  {
    authors: "B. Balle and Y.-X. Wang",
    title: "Improving the Gaussian Mechanism for Differential Privacy: Analytical Calibration and Optimal Denoising",
    pdfurl: "https://arxiv.org/pdf/1805.06530",
    where: "International Conference on Machine Learning (ICML), 2018",
    links: [
      {
        name: "arXiv",
        url: "https://arxiv.org/abs/1805.06530"
      },
      {
        name: "code",
        url: "https://github.com/BorjaBalle/analytic-gaussian-mechanism"
      }
    ]
  },
  {
    authors: "P. Schoppmann, L. Vogelsang, A. Gascon, and B. Balle",
    title: "Private Nearest Neighbors Classification in Federated Databases",
    pdfurl: "https://eprint.iacr.org/2018/289.pdf",
    where: "Cryptology ePrint Archive, 2018",
    links: [
      {
        name: "ePrint",
        url: "https://eprint.iacr.org/2018/289"
      }
    ]
  },
  {
    authors: "Y. Grinberg, H. Aboutalebi, M. Lyman-Abramovitch, B. Balle, and D. Precup",
    title: "Learning Predictive State Representations from Non-uniform Sampling",
    pdfurl: "#",
    where: "AAAI Conference on Artificial Intelligence (AAAI), 2018",
  },
  {
    authors: "M. Ruffini, G. Rabusseau, and B. Balle",
    title: "Hierarchical Methods of Moments",
    pdfurl: "https://papers.nips.cc/paper/6786-hierarchical-methods-of-moments.pdf",
    where: "Neural Information Processing Systems (NIPS), 2017",
    links: [
      {
        name: "proceedings",
        url: "https://papers.nips.cc/paper/6786-hierarchical-methods-of-moments"
      },
      {
        name: "supplementary",
        url: "https://papers.nips.cc/paper/6786-hierarchical-methods-of-moments-supplemental.zip"
      }
    ]
  },
  {
    authors: "G. Rabusseau, B. Balle, and J. Pineau",
    title: "Multitask Spectral Learning of Weighted Automata",
    pdfurl: "https://papers.nips.cc/paper/6852-multitask-spectral-learning-of-weighted-automata.pdf",
    where: "Neural Information Processing Systems (NIPS), 2017",
    links: [
      {
        name: "proceedings",
        url: "https://papers.nips.cc/paper/6852-multitask-spectral-learning-of-weighted-automata"
      },
      {
        name: "supplementary",
        url: "https://papers.nips.cc/paper/6852-multitask-spectral-learning-of-weighted-automata-supplemental.zip"
      }
    ]
  },
  {
    authors: "B. Balle and O.-A. Maillard",
    title: "Spectral Learning from a Single Trajectory under Finite-State Policies",
    pdfurl: "http://proceedings.mlr.press/v70/balle17a/balle17a.pdf",
    where: "International Conference on Machine Learning (ICML), 2017",
    links: [
      {
        name: "PMLR",
        url: "http://proceedings.mlr.press/v70/balle17a.html"
      },
      {
        name: "supplementary",
        url: "http://proceedings.mlr.press/v70/balle17a/balle17a-supp.pdf"
      }
    ]
  },
  {
    authors: "B. Balle, P. Gourdeau, and P. Panangaden",
    title: "Bisimulation Metrics for Weighted Automata",
    pdfurl: "https://arxiv.org/pdf/1702.08017",
    where: "International Colloquium on Automata, Languages, and Programming (ICALP), 2017",
    links: [
      {
        name: "arXiv",
        url: "https://arxiv.org/abs/1702.08017"
      }
    ]
  },
  {
    authors: "A. Gascon, P. Schoppmann, B. Balle, M. Raykova, J. Doerner, S. Zahur, and D. Evans",
    title: "Privacy-Preserving Distributed Linear Regression on High-Dimensional Data",
    pdfurl: "https://www.degruyter.com/downloadpdf/j/popets.2017.2017.issue-4/popets-2017-0053/popets-2017-0053.xml",
    where: "Proceedings on Privacy Enhancing Technologies (PoPETS), 2017",
    links: [
      {
        name: "doi",
        url: "https://doi.org/10.1515/popets-2017-0053"
      }
    ]
  },
  {
    authors: "B. Balle and M. Mohri",
    title: "Generalization Bounds for Learning Weighted Automata",
    pdfurl: "https://arxiv.org/pdf/1610.07883v1",
    where: "Theoretical Computer Science, 2017",
    links: [
      {
        name: "arXiv",
        url: "https://arxiv.org/abs/1610.07883"
      },
      {
        name: "doi",
        url: "https://doi.org/10.1016/j.tcs.2017.11.023"
      }
    ]
  },
  {
    authors: "B. Balle, M. Gomrokchi, and D. Precup",
    title: "Differentially Private Policy Evaluation",
    pdfurl: "http://arxiv.org/pdf/1603.02010v1",
    where: "International Conference on Machine Learning (ICML), 2016",
    links: [
      {
        name: "arXiv",
        url: "http://arxiv.org/abs/1603.02010"
      }
    ]
  },
  {
    authors: "L. Langer, B. Balle, and D. Precup",
    title: "Learning Multi-Step Predictive State Representations",
    pdfurl: "#",
    where: "International Joint Conference on Artificial Intelligence (IJCAI), 2016",
  },
  {
    authors: "G. Rabusseau, B. Balle, and S. B. Cohen",
    title: "Low-Rank Approximation of Weighted Tree Automata",
    pdfurl: "http://jmlr.org/proceedings/papers/v51/rabusseau16.html",
    where: "Artificial Intelligence and Statistics Conference (AISTATS), 2016",
    //links: [
    //{ name: "arXiv", url: "http://arxiv.org/abs/1511.01442" }
    //]
  },
  {
    authors: "C. Zhou, B. Balle, and J. Pineau",
    title: "Learning Time Series Models for Pedestrian Motion Prediction",
    pdfurl: "http://www.cs.mcgill.ca/~jpineau/files/zhou-icra16.pdf",
    where: "IEEE International Conference on Robotics and Automation (ICRA), 2016",
    links: [
      {
        name: "code",
        url: "http://www.cs.mcgill.ca/~jpineau/code/zhou-icra16-code.zip"
      }
    ]
  },
  {
    authors: "B. Wang, B. Balle, and J. Pineau",
    title: "Multitask Generalized Eigenvalue Program",
    pdfurl: "#",
    where: "AAAI Conference on Artificial Intelligence (AAAI), 2016",
  },
  {
    authors: "B. Balle and M. Mohri",
    title: "On the Rademacher Complexity of Weighted Automata",
    pdfurl: "#",
    where: "Algorithmic Learning Theory (ALT), 2015",
  },
  {
    authors: "B. Balle and M. Mohri",
    title: "Learning Weighted Automata",
    pdfurl: "#",
    where: "Conference on Algebraic Informatics (CAI), 2015",
    extra: "<br /><i style='font-size: 0.9em;'>(<b>Invited Paper</b>)</i>"
  },
  {
    authors: "P. L. Bacon, B. Balle, and D. Precup",
    title: "Learning and Planning with Timing Information in Markov Decision Processes",
    pdfurl: "papers/uai15.pdf",
    where: "Uncertainty in Artificial Intelligence (UAI), 2015",
  },
  {
    authors: "L. Addario-Berry, B. Balle, and G. Perarnau",
    title: "Diameter and Stationary Distribution of Random r-out Digraphs",
    pdfurl: "http://arxiv.org/pdf/1504.06840v1",
    where: "ArXiv Preprint, 2015",
    links: [
      {
        name: "arXiv",
        url: "http://arxiv.org/abs/1504.06840"
      }
    ]
  },
  {
    authors: "B. Balle, P. Panangaden, and D. Precup",
    title: "A Canonical Form for Weighted Automata and Applications to Approximate Minimization",
    pdfurl: "http://arxiv.org/pdf/1501.06841",
    where: "Logic in Computer Science (LICS), 2015",
    links: [
      {
        name: "arXiv",
        url: "http://arxiv.org/abs/1501.06841"
      }
    ]
  },
  {
    authors: "B. Balle, W. Hamilton, and J. Pineau",
    title: "Methods of Moments for Learning Stochastic Languages: Unified Presentation and Empirical Comparison",
    pdfurl: "papers/icml14-mom.pdf",
    where: "International Conference on Machine Learning (ICML), 2014",
  },
  {
    authors: "A. Quattoni, B. Balle, X. Carreras, and A. Globerson",
    title: "Spectral Regularization for Max-Margin Sequence Tagging",
    pdfurl: "papers/icml14-oom.pdf",
    where: "International Conference on Machine Learning (ICML), 2014",
  },
  {
    authors: "B. Balle, X. Carreras, F. M. Luque, and A. Quattoni",
    title: "Spectral Learning of Weighted Automata: A Forward-Backward Perspective",
    pdfurl: "papers/preprint-bclq13.pdf",
    where: "Machine Learning, Vol. 96, No. 1, 2014",
    links: [
      {
        name: "doi",
        url: "http://dx.doi.org/10.1007/s10994-013-5416-x"
      }
    ]
  },
  {
    authors: "B. Balle, J. Castro, and R. Gavaldà",
    title: "Adaptively Learning Probabilistic Deterministic Automata from Data Streams",
    pdfurl: "papers/preprint-bcg13.pdf",
    where: "Machine Learning, Vol. 96, No. 1, 2014",
    links: [
      {
        name: "doi",
        url: "http://dx.doi.org/10.1007/s10994-013-5408-x"
      }
    ]
  },
  {
    authors: "B. Balle",
    title: "Ergodicity of Random Walks on Random DFA",
    pdfurl: "http://arxiv.org/pdf/1311.6830v1",
    where: "ArXiv Preprint, 2013",
    links: [
      {
        name: "arXiv",
        url: "http://arxiv.org/abs/1311.6830"
      }
    ]
  },
  {
    authors: "B. Balle",
    title: "Learning Finite-State Machines: Algorithmic and Statistical Aspects",
    pdfurl: "other/phdthesis.pdf",
    where: "PhD Thesis, 2013",
  },
  {
    authors: "B. Balle, B. Casas, A. Catarineu, R. Gavalà, and D. Manzano-Macho",
    title: "The Architecture of a Churn Prediction System Based on Stream Mining",
    pdfurl: "http://www.lsi.upc.edu/%7Egavalda/ccia2013Churn.pdf",
    where: "International Conference of the Catalan Association of Artificial Intelligence (CCIA), 2013",
    links: [
      {
        name: "doi",
        url: "http://dx.doi.org/10.3233/978-1-61499-320-9-157"
      }
    ]
  },
  {
    authors: "B. Balle, J. Castro, and R. Gavaldà",
    title: "Learning Probabilistic Automata: A Study In State Distinguishability",
    pdfurl: "papers/tcs13.pdf",
    where: "Theoretical Computer Science, 473:46-60, 2013",
    links: [
      {
        name: "doi",
        url: "http://dx.doi.org/10.1016/j.tcs.2012.10.009"
      }
    ]
  },
  {
    authors: "B. Balle and M. Mohri",
    title: "Spectral Learning of General Weighted Automata via Constrained Matrix Completion",
    pdfurl: "papers/nips12.pdf",
    where: "Neural Information Processing Systems (NIPS), 2012",
    links: [
      {
        name: "slides",
        url: "slides/nips12.pdf"
      },
      {
        name: "video",
        url: "http://videolectures.net/nips2012_balle_spectral_learning/"
      }
    ],
    extra: "<br /><i style='font-size: 0.9em;'>(<b>Honorable Mention for the Outstanding Student Paper Award</b>)</i>"
  },
  {
    authors: "B. Balle, J. Castro, and R. Gavaldà",
    title: "Bootstrapping and Learning PDFA in Data Streams",
    pdfurl: "papers/icgi12.pdf",
    where: "International Colloquium on Grammatical Inference (ICGI), 2012",
    links: [
      {
        name: "slides",
        url: "slides/icgi12.pdf"
      }
    ],
    extra: "<br /><i style='font-size: 0.9em;'>(<b>Best Student Paper Award</b>)</i>"
  },
  {
    authors: "B. Balle, A. Quattoni, and X. Carreras",
    title: "Local Loss Optimization in Operator Models: A New Insight into Spectral Learning",
    pdfurl: "papers/icml12.pdf",
    where: "International Conference on Machine Learning (ICML), 2012",
    links: [
      {
        name: "slides",
        url: "slides/icml12.pdf"
      },
      {
        name: "video",
        url: "http://techtalks.tv/talks/local-loss-optimization-in-operator-models-a-new-insight-into-spectral-learning/57488/"
      }
    ]
  },
  {
    authors: "F. M. Luque, A. Quattoni, B. Balle, and X. Carreras",
    title: "Spectral Learning for Non-Deterministic Dependency Parsing",
    pdfurl: "papers/eacl12.pdf",
    where: "Conference of the European Chapter of the Association for Computational Linguistics (EACL), 2012",
    extra: "<br /><i style='font-size: 0.9em;'>(<b>Best Paper Award</b>)</i>"
  },
  {
    authors: "B. Balle, A. Quattoni, and X. Carreras",
    title: "A Spectral Learning Algorithm for Finite State Transducers",
    pdfurl: "papers/ecml11.pdf",
    where: "European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases (ECML-PKDD), 2011",
    links: [
      {
        name: "slides",
        url: "slides/ecml11.pdf"
      }
    ]
  },
  {
    authors: "B. Balle, J. Castro, and R. Gavaldà",
    title: "A Lower Bound for Learning Distributions Generated by Probabilistic Automata",
    pdfurl: "papers/alt12.pdf",
    where: "Algorithmic Learning Theory (ALT), 2010"
  },
  {
    authors: "B. Balle",
    title: "Implementing Kearns-Vazirani Algorithm for Learning DFA Only with Membership Queries",
    pdfurl: "papers/zulu10.pdf",
    where: "Zulu Workshop, 2010",
    extra: "<br /> <i style='font-size: 0.9em;'>(The algorithm described in this paper finished in <b>2nd place</b> in the <a href='http://labh-curien.univ-st-etienne.fr/zulu/'>Zulu Competition</a>)</i>"
  },
  {
    authors: "B. Balle, J. Castro, and R. Gavaldà",
    title: "Learning PDFA with Asynchronous Transitions",
    pdfurl: "papers/icgi10.pdf",
    where: "International Colloquium on Grammatical Inference (ICGI), 2010"
  },
  {
    authors: "B. Balle, E. Ventura, and J.M. Fuertes",
    title: "An Algorithm to Design Prescribed Length Codes for Single-Tracked Shaft Encoders",
    pdfurl: "papers/icm09.pdf",
    where: "IEEE International Conference on Mechatronics (ICM), 2009",
    links: [
      {
        name: "slides",
        url: "slides/icm09.pdf"
      }
    ]
  },
  {
    authors: "J.M. Fuertes, B. Balle, and E. Ventura",
    title: "Absolute-Type Shaft Encoding Using LFSR Sequences With a Prescribed Length",
    pdfurl: "papers/tim08.pdf",
    where: "IEEE Transactions on Instrumentation and Measurement, Vol.  57, No. 5, 2008"
  }
];
