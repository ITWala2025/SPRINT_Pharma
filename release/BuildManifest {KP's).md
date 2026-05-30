project:
  name: Pharma Corporate Website

release:
  version: "1.0.0"
  build_number: "1000"
  release_date: "2026-06-05"
  build_timestamp: "2026-06-05T00:00:00Z"

source_control:
  branch: "main"
  tag: "v1.0.0"
  commit_hash: "<commit_hash_pending>"

build:
  builder: "GitHub"
  ci_system: "GitHub Actions"
  runtime: "Node.js"
  package_manager: "npm"

environment:
  name: "production"

platforms:
  - desktop_web
  - mobile_web
  - tablet_web

dependencies:
  nodejs: "<version>"
  npm: "<version>"

features:
  - Responsive Navigation Menu
  - Hero Carousel
  - Company Profile Section
  - Product Showcase Cards
  - Contact Form
  - WhatsApp Integration
  - Footer Redesign

enhancements:
  - Mobile Responsiveness Improvements
  - Performance Optimization
  - Image Optimization
  - Accessibility Enhancements

bug_fixes:
  - Mobile Menu Overlap Fix
  - Footer Alignment Fix
  - CTA Hover State Fix
  - Tablet Image Scaling Fix

artifacts:
  - name: website-build
    type: static-web-assets
    path: /dist
    checksum: "<generated_during_build>"

quality_assurance:
  status: "Passed"
  regression_tested: true
  responsive_testing:
    desktop: true
    tablet: true
    mobile: true

known_issues:
  - Hero animation may lag on low-end devices

deployment:
  strategy: "Production Deployment"
  cache_clear_required: true
  rollback_supported: true

approvals:
  developer: "<Pending>"
  tester: "<Pending>"
  project_manager: "<Pending>"