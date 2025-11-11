<!DOCTYPE html>
<html lang="en" data-theme="dark" style="background: #151521">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="color-scheme" content="dark">

    <!-- Critical CSS - Load immediately to prevent white flash -->
    <style>
        html, body {
            background: #151521 !important;
            color: #ffffff !important;
            margin: 0;
            padding: 0;
        }
    </style>

    <title>File Manager</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    <!-- TinyMCE Editor -->
    <script src="https://cdn.tiny.cloud/1/eu8ndo8mzsm9jt8pak5j838izchh34jxwvijcmiaunbouq6n/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>

    <!-- CodeMirror CSS (fallback to v5) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/theme/default.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/theme/darcula.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/addon/dialog/dialog.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/addon/hint/show-hint.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/addon/search/matchesonscrollbar.min.css">
    <style>
        /*  - Modern File Manager */
        /* Default to dark theme */
        :root {
            --bg-primary: #1e1e2d;
            --bg-secondary: #151521;
            --bg-tertiary: #1a1a27;
            --bg-hover: #2b2b40;
            --bg-active: #2b2b40;
            --text-primary: #ffffff;
            --text-secondary: #92929f;
            --text-muted: #565674;
            --border-color: #2b2b40;
            --border-light: #323248;
            --accent-color: #009ef7;
            --accent-hover: #0095e8;
            --success-color: #50cd89;
            --danger-color: #f1416c;
            --warning-color: #ffc700;
            --info-color: #7239ea;
            --shadow-sm: 0 0.5rem 1.5rem 0.5rem rgba(0,0,0,0.075);
            --shadow-lg: 0 0.75rem 1.5rem rgba(0,0,0,0.1);
            --radius-sm: 0.425rem;
            --radius: 0.625rem;
            --radius-lg: 1rem;
            --transition: all 0.3s ease;
        }

        [data-theme="light"] {
            --bg-primary: #ffffff;
            --bg-secondary: #f5f8fa;
            --bg-tertiary: #ffffff;
            --bg-hover: #f3f6f9;
            --bg-active: #e8f5ff;
            --text-primary: #181c32;
            --text-secondary: #5e6278;
            --text-muted: #a1a5b7;
            --border-color: #eff2f5;
            --border-light: #e4e6ef;
        }

        /* Keep this for backwards compatibility */
        [data-theme="dark"] {
            --bg-primary: #1e1e2d;
            --bg-secondary: #151521;
            --bg-tertiary: #1a1a27;
            --bg-hover: #2b2b40;
            --bg-active: #2b2b40;
            --text-primary: #ffffff;
            --text-secondary: #92929f;
            --text-muted: #565674;
            --border-color: #2b2b40;
            --border-light: #323248;
        }

        /* Font Awesome Icon Colors */
        .fas.fa-home, .fas.fa-folder { color: #f39c12; }
        .fas.fa-file, .fas.fa-file-alt { color: #3498db; }
        .fas.fa-file-pdf { color: #e74c3c; }
        .fas.fa-file-word { color: #2980b9; }
        .fas.fa-file-excel { color: #27ae60; }
        .fas.fa-file-image { color: #9b59b6; }
        .fas.fa-file-audio { color: #e67e22; }
        .fas.fa-file-video { color: #e74c3c; }
        .fas.fa-file-archive { color: #95a5a6; }
        .fas.fa-file-code { color: #8e44ad; }
        .fab.fa-html5 { color: #e34f26; }
        .fab.fa-css3-alt { color: #1572b6; }
        .fab.fa-js-square { color: #f7df1e; }
        .fab.fa-php { color: #777bb4; }
        .fab.fa-python { color: #3776ab; }
        .fab.fa-java { color: #f89820; }
        .fab.fa-git-alt { color: #f05032; }
        .fab.fa-docker { color: #2496ed; }
        .fab.fa-markdown { color: #000000; }
        .fas.fa-database { color: #336791; }
        .fas.fa-cog { color: #7f8c8d; }
        .fas.fa-lock { color: #e74c3c; }
        .fas.fa-hammer { color: #95a5a6; }
        .fas.fa-book-open { color: #3498db; }
        .fas.fa-certificate { color: #f39c12; }
        .fas.fa-clipboard-list { color: #2ecc71; }
        .fas.fa-edit { color: #f39c12; }
        .fas.fa-trash { color: #e74c3c; }
        .fas.fa-download { color: #27ae60; }
        .fas.fa-arrows-alt { color: #3498db; }
        .fas.fa-upload { color: #2ecc71; }
        .fas.fa-sync-alt { color: #3498db; }
        .fas.fa-moon { color: #f39c12; }
        .fas.fa-undo { color: #95a5a6; }
        .fas.fa-eye { color: #9b59b6; }
        .fas.fa-paint-brush { color: #e67e22; }
        .fas.fa-code { color: #2c3e50; }
        .fas.fa-spinner { color: #3498db; }
        .fas.fa-arrow-up { color: #95a5a6; }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
            background: var(--bg-secondary);
            color: var(--text-primary);
            font-size: 13px;
            line-height: 1.5;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        /* Main Layout */
        .file-manager-container {
            display: flex;
            height: 100vh;
            overflow: hidden;
        }

        /* Sidebar */
        .sidebar {
            width: 265px;
            background: var(--bg-primary);
            border-right: 1px solid var(--border-color);
            display: flex;
            flex-direction: column;
            transition: var(--transition);
        }

        .sidebar-header {
            padding: 1.5rem;
            border-bottom: 1px solid var(--border-color);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .sidebar-logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--text-primary);
        }

        .sidebar-close-btn {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--text-secondary);
            cursor: pointer;
            padding: 0.25rem;
            border-radius: var(--radius);
            transition: var(--transition);
        }

        .sidebar-close-btn:hover {
            background: var(--bg-hover);
            color: var(--text-primary);
        }

        .sidebar-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 99;
            display: none;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .sidebar-overlay.show {
            display: block;
            opacity: 1;
        }

        .sidebar-nav {
            padding: 1.5rem 1rem;
            flex: 1;
            overflow-y: auto;
        }

        .nav-section {
            margin-bottom: 2rem;
        }

        .nav-section-title {
            color: var(--text-muted);
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 0.75rem;
            padding: 0 0.5rem;
        }

        .nav-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.625rem 0.75rem;
            border-radius: var(--radius);
            color: var(--text-secondary);
            text-decoration: none;
            transition: var(--transition);
            margin-bottom: 0.25rem;
            cursor: pointer;
        }

        .nav-item:hover {
            background: var(--bg-hover);
            color: var(--text-primary);
        }

        .nav-item.active {
            background: var(--bg-active);
            color: var(--accent-color);
            font-weight: 500;
        }

        /* Main Content */
        .main-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        /* Toolbar */
        .toolbar {
            background: var(--bg-primary);
            border-bottom: 1px solid var(--border-color);
            padding: 1rem 1.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            min-height: 70px;
            overflow: hidden;
            width: 100%;
            box-sizing: border-box;
        }

        .toolbar-left {
            display: flex;
            align-items: center;
            gap: 1rem;
            flex: 1;
            min-width: 0;
            overflow: hidden;
        }

        .toolbar-right {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            flex-wrap: wrap;
            min-width: 0;
            flex-shrink: 1;
            position: relative;
        }

        /* Breadcrumb */
        .breadcrumb {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--text-secondary);
            font-size: 0.875rem;
        }

        .breadcrumb-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .breadcrumb-link {
            color: var(--text-secondary);
            text-decoration: none;
            transition: var(--transition);
            cursor: pointer;
        }

        .breadcrumb-link:hover {
            color: var(--accent-color);
        }

        .breadcrumb-separator {
            color: var(--text-muted);
        }

        /* Search Box */
        .search-box {
            position: relative;
            width: 250px;
        }

        .search-input {
            width: 100%;
            padding: 0.5rem 2.5rem 0.5rem 0.75rem;
            background: var(--bg-secondary);
            border: 1px solid var(--border-light);
            border-radius: var(--radius);
            color: var(--text-primary);
            font-size: 0.875rem;
            transition: var(--transition);
        }

        .search-input:focus {
            outline: none;
            border-color: var(--accent-color);
        }

        .search-icon {
            position: absolute;
            right: 0.75rem;
            top: 50%;
            transform: translateY(-50%);
            color: var(--text-muted);
            cursor: pointer;
        }

        /* Buttons */
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: var(--radius);
            font-size: 0.875rem;
            font-weight: 500;
            cursor: pointer;
            transition: var(--transition);
            white-space: nowrap;
        }

        .btn-primary {
            background: var(--accent-color);
            color: white;
        }

        .btn-primary:hover {
            background: var(--accent-hover);
            transform: translateY(-1px);
        }

        .btn-light {
            background: var(--bg-secondary);
            color: var(--text-secondary);
            border: 1px solid var(--border-light);
        }

        .btn-light:hover {
            background: var(--bg-hover);
            color: var(--text-primary);
        }

        .btn-success {
            background: var(--success-color);
            color: white;
        }

        .btn-sm {
            padding: 0.375rem 0.75rem;
            font-size: 0.875rem;
        }

        .btn-danger {
            background: var(--danger-color);
            color: white;
        }

        .btn-danger i {
            color: white !important;
        }

        .btn-icon-only {
            padding: 0.5rem;
            width: 36px;
            height: 36px;
        }

        /* File List Container */
        .file-list-container {
            flex: 1;
            overflow: auto;
            background: var(--bg-secondary);
            padding: 1.5rem;
        }

        /* View Toggle */
        .view-toggle {
            display: flex;
            background: var(--bg-secondary);
            border-radius: var(--radius);
            padding: 2px;
        }

        .view-toggle-btn {
            padding: 0.375rem 0.75rem;
            background: transparent;
            border: none;
            color: var(--text-secondary);
            cursor: pointer;
            border-radius: var(--radius-sm);
            transition: var(--transition);
        }

        .view-toggle-btn.active {
            background: var(--bg-primary);
            color: var(--text-primary);
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        /* File Grid View */
        .file-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            gap: 1rem;
        }

        .file-grid-item {
            background: var(--bg-primary);
            border: 2px solid transparent;
            border-radius: var(--radius-lg);
            padding: 1.5rem 1rem;
            text-align: center;
            cursor: pointer;
            transition: var(--transition);
            position: relative;
        }

        .file-grid-item:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
            border-color: var(--border-light);
        }

        .file-grid-item.selected {
            background: var(--bg-active);
            border-color: var(--accent-color);
        }

        .file-grid-checkbox {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            width: 18px;
            height: 18px;
        }

        .file-grid-icon {
            font-size: 3rem;
            margin-bottom: 0.75rem;
        }

        .file-grid-name {
            font-size: 0.875rem;
            color: var(--text-primary);
            font-weight: 500;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .file-grid-size {
            font-size: 0.75rem;
            color: var(--text-muted);
            margin-top: 0.25rem;
        }

        /* File List View */
        .file-list-table {
            width: 100%;
            background: var(--bg-primary);
            border-radius: var(--radius-lg);
            overflow: hidden;
        }

        .file-list-header {
            display: grid;
            grid-template-columns: 46px 28px 40px 1fr 120px 150px 150px 100px;
            padding: 1rem 1.5rem;
            background: var(--bg-tertiary);
            border-bottom: 2px solid var(--border-color);
            font-size: 0.75rem;
            font-weight: 600;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .sortable-header {
            cursor: pointer;
            user-select: none;
            transition: var(--transition);
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }

        .sortable-header:hover {
            color: var(--accent-color);
        }

        .sort-indicator {
            font-size: 0.6rem;
            opacity: 0.5;
        }

        .sortable-header.active {
            color: var(--accent-color);
        }

        .sortable-header.active .sort-indicator {
            opacity: 1;
        }

        .file-list-item {
            display: grid;
            grid-template-columns: 46px 28px 40px 1fr 120px 150px 150px 100px;
            padding: 0.75rem 1.5rem;
            border-bottom: 1px solid var(--border-color);
            align-items: center;
            cursor: pointer;
            transition: var(--transition);
        }

        .file-list-item:hover {
            background: var(--bg-hover);
        }

        .file-list-item.selected {
            background: var(--bg-active);
        }

        .file-grid-item.parent-dir,
        .file-list-item.parent-dir {
            opacity: 0.8;
            font-weight: 600;
        }

        .file-grid-item.parent-dir:hover,
        .file-list-item.parent-dir:hover {
            opacity: 1;
            background: var(--bg-hover);
        }

        .file-checkbox {
            width: 18px;
            height: 18px;
            cursor: pointer;
        }

        #selectAllCheckbox {
            width: 18px;
            height: 18px;
            cursor: pointer;
        }

        .file-icon {
            font-size: 1.5rem;
        }

        .file-name {
            font-weight: 500;
            color: var(--text-primary);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .file-date, .file-size, .file-extension {
            color: var(--text-secondary);
            font-size: 0.875rem;
        }

        .file-actions {
            display: flex;
            gap: 0.25rem;
            opacity: 0;
            transition: var(--transition);
        }

        .file-list-item:hover .file-actions {
            opacity: 1;
        }

        .action-btn {
            padding: 0.25rem;
            background: transparent;
            border: none;
            color: var(--text-secondary);
            cursor: pointer;
            border-radius: var(--radius-sm);
            transition: var(--transition);
        }

        .action-btn:hover {
            background: var(--bg-hover);
            color: var(--text-primary);
        }

        /* Status Bar */
        .status-bar {
            background: var(--bg-primary);
            border-top: 1px solid var(--border-color);
            padding: 0.75rem 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.75rem;
            color: var(--text-secondary);
        }

        /* Modals */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(4px);
            z-index: 1000;
            align-items: center;
            justify-content: center;
        }

        .modal.show {
            display: flex;
            animation: fadeIn 0.2s ease;
        }

        .modal-content {
            background: var(--bg-primary);
            border-radius: var(--radius-lg);
            max-width: 500px;
            width: 90%;
            max-height: 90vh;
            overflow: auto;
            box-shadow: var(--shadow-lg);
            animation: slideUp 0.3s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .modal-header {
            padding: 1.5rem;
            border-bottom: 1px solid var(--border-color);
            font-size: 1.125rem;
            font-weight: 600;
            color: var(--text-primary);
        }

        .modal-body {
            padding: 1.5rem;
        }

        .modal-footer {
            padding: 1.5rem;
            border-top: 1px solid var(--border-color);
            display: flex;
            justify-content: flex-end;
            gap: 0.75rem;
        }

        /* Form Elements */
        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: var(--text-primary);
        }

        .form-control {
            width: 100%;
            padding: 0.625rem 0.75rem;
            background: var(--bg-secondary);
            border: 1px solid var(--border-light);
            border-radius: var(--radius);
            color: var(--text-primary);
            font-size: 0.875rem;
            transition: var(--transition);
        }

        .form-control:focus {
            outline: none;
            border-color: var(--accent-color);
            background: var(--bg-primary);
        }
        
        /* Move items styling */
        .move-item {
            padding: 0.5rem 0.75rem;
            background: var(--bg-secondary);
            border-radius: var(--radius);
            margin-bottom: 0.5rem;
            border: 1px solid var(--border-light);
            font-size: 0.875rem;
        }
        
        .form-text {
            color: var(--text-muted);
            font-size: 0.75rem;
            margin-top: 0.25rem;
        }
        
        /* Move modal styling */
        .move-destination-options {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }
        
        .folder-picker {
            border: 1px solid var(--border-light);
            border-radius: var(--radius);
            background: var(--bg-secondary);
            max-height: 200px;
            overflow-y: auto;
            padding: 0.5rem;
        }
        
        .folder-picker-item {
            padding: 0.5rem 0.75rem;
            cursor: pointer;
            border-radius: var(--radius);
            margin-bottom: 0.25rem;
            transition: var(--transition);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .folder-picker-item:hover {
            background: var(--bg-hover);
        }
        
        .folder-picker-item.selected {
            background: var(--accent-color);
            color: white;
        }
        
        .folder-picker-item.current-folder {
            background: var(--bg-primary);
            border: 2px solid var(--accent-color);
            font-weight: bold;
        }
        
        .folder-breadcrumb {
            padding: 0.5rem;
            background: var(--bg-secondary);
            border-radius: var(--radius);
            margin-bottom: 0.5rem;
            font-size: 0.875rem;
        }
        
        .folder-breadcrumb .breadcrumb-link {
            color: var(--accent-color);
            cursor: pointer;
            text-decoration: none;
        }
        
        .folder-breadcrumb .breadcrumb-link:hover {
            text-decoration: underline;
        }
        
        .selected-path {
            padding: 0.5rem;
            background: var(--bg-primary);
            border-radius: var(--radius);
            margin-top: 0.5rem;
            font-size: 0.875rem;
        }
        
        .folder-picker-loading {
            text-align: center;
            padding: 1rem;
            color: var(--text-muted);
        }

        /* Loading Spinner */
        .spinner {
            width: 20px;
            height: 20px;
            border: 2px solid var(--border-light);
            border-top-color: var(--accent-color);
            border-radius: 50%;
            animation: spin 0.6s linear infinite;
            display: inline-block;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        .loading-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(21, 21, 33, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 100;
        }

        [data-theme="light"] .loading-overlay {
            background: rgba(255, 255, 255, 0.9);
        }

        /* Mobile Menu Toggle */
        .mobile-menu-toggle {
            display: none;
            padding: 0.5rem;
            background: transparent;
            border: none;
            color: var(--text-primary);
            font-size: 1.5rem;
            cursor: pointer;
        }

        /* Responsive */
        /* Responsive toolbar - progressive button hiding */
        @media (max-width: 1300px) {
            /* Hide Move and Delete, show More button */
            .toolbar-btn-move,
            .toolbar-btn-delete {
                display: none;
            }
            .mobile-more-btn {
                display: inline-block !important;
            }
        }
        
        @media (max-width: 1100px) {
            /* Hide Download, Move, Delete */
            .toolbar-btn-download,
            .toolbar-btn-move,
            .toolbar-btn-delete {
                display: none;
            }
            .toolbar {
                gap: 0.5rem;
            }
            .toolbar-right {
                gap: 0.25rem;
            }
            .toolbar .btn {
                padding: 0.5rem 0.75rem;
                font-size: 13px;
            }
        }
        
        @media (max-width: 900px) {
            /* Hide Edit, Download, Move, Delete */
            .toolbar-btn-edit,
            .toolbar-btn-download,
            .toolbar-btn-move,
            .toolbar-btn-delete {
                display: none;
            }
        }
        
        @media (max-width: 1024px) {
            .sidebar {
                position: fixed;
                left: -265px;
                z-index: 100;
                height: 100vh;
                box-shadow: var(--shadow-lg);
                transition: transform 0.3s ease;
            }
            
            .sidebar.open {
                transform: translateX(265px);
            }
            
            .mobile-menu-toggle {
                display: block;
            }
            
            .sidebar-close-btn {
                display: block;
            }
            
            .search-box {
                width: 200px;
            }
        }

        @media (max-width: 768px) {
            .file-grid {
                grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
            }
            
            .toolbar {
                padding: 0.5rem;
                flex-wrap: wrap;
                min-height: auto;
                gap: 0.5rem;
            }
            
            .toolbar-left {
                width: 100%;
                margin-bottom: 0.5rem;
                flex-wrap: wrap;
                gap: 0.5rem;
            }
            
            .toolbar-right {
                width: 100%;
                justify-content: center;
                flex-wrap: wrap;
                gap: 0.25rem;
            }
            
            .toolbar .btn {
                padding: 0.375rem 0.5rem;
                font-size: 12px;
                margin: 0;
                min-width: auto;
            }
            
            .search-box {
                width: 100%;
                max-width: none;
                margin-top: 0.5rem;
            }
            
            .search-input {
                font-size: 14px;
                padding: 0.5rem;
            }
            
            .mobile-menu-toggle {
                padding: 0.5rem;
                font-size: 16px;
            }
            
            .view-toggle {
                gap: 2px;
            }
            
            .view-toggle-btn {
                padding: 0.375rem 0.5rem;
                font-size: 12px;
            }
            
            .file-list-header,
            .file-list-item {
                grid-template-columns: 46px 28px 40px 1fr 80px;
            }

            .file-date, .file-extension, .file-actions {
                display: none;
            }
            
            .breadcrumb {
                display: none;
            }
            
            /* Mobile editor modal improvements */
            #editorModal .modal-content {
                max-width: 100% !important;
                width: 100% !important;
                height: 100vh !important;
                margin: 0 !important;
                border-radius: 0 !important;
                max-height: 100vh !important;
            }
            
            #editorModal .modal-header {
                flex-wrap: wrap;
                padding: 0.5rem !important;
                min-height: auto;
            }
            
            #editorModal .modal-header > div:first-child {
                font-size: 14px;
                margin-bottom: 0.5rem;
                width: 100%;
            }
            
            #editorModal .modal-header > div:last-child {
                gap: 5px !important;
                width: 100%;
                justify-content: flex-start;
            }
            
            #editorModal .modal-header .btn {
                padding: 0.25rem 0.5rem;
                font-size: 12px;
            }
            
            #editorModal .modal-body {
                height: calc(100vh - 140px) !important;
                padding: 0 !important;
                margin-bottom: 80px; /* Account for fixed footer */
            }
            
            #editorModal .modal-footer {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: var(--bg-primary);
                border-top: 2px solid var(--border-color);
                z-index: 1001;
                padding: 0.75rem !important;
                flex-wrap: wrap;
                box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
            }
            
            #editorModal .modal-footer > div {
                width: 100%;
                margin-bottom: 0.5rem;
            }
            
            #editorModal .modal-footer > div:last-child {
                justify-content: center;
                margin-bottom: 0;
            }
            
            #editorModal .modal-footer .btn {
                padding: 0.5rem 1rem;
                margin: 0 0.25rem;
                font-size: 14px;
                min-width: 80px;
            }
            
            #editorModal #codeEditor {
                font-size: 12px !important;
                padding: 10px !important;
            }
            
            #editorModal #editorStatus {
                font-size: 12px;
                text-align: center;
                display: block;
            }
        }

        /* Mobile Actions Dropdown */
        .mobile-actions-dropdown {
            background: var(--bg-primary);
            border: 1px solid var(--border-color);
            border-radius: var(--radius);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 0.5rem;
            max-height: 300px;
            overflow-y: auto;
        }
        
        .mobile-actions-dropdown .btn {
            width: 100%;
            margin-bottom: 0.25rem;
            justify-content: flex-start;
            text-align: left;
            background: var(--bg-secondary);
            border: 1px solid var(--border-light);
            color: var(--text-primary);
        }
        
        .mobile-actions-dropdown .btn:hover {
            background: var(--bg-hover);
        }
        
        .mobile-actions-dropdown .btn:last-child {
            margin-bottom: 0;
        }

        @media (max-width: 480px) {
            /* Extra small screens - hide most toolbar buttons and show more button */
            .toolbar-btn-newfile,
            .toolbar-btn-newfolder,
            .toolbar-btn-edit,
            .toolbar-btn-download,
            .toolbar-btn-move,
            .toolbar-btn-delete {
                display: none;
            }
            
            .mobile-more-btn {
                display: inline-block !important;
            }
            
            .toolbar .btn {
                padding: 0.25rem 0.375rem;
                font-size: 11px;
            }
            
            .breadcrumb {
                font-size: 12px;
            }
            
            .search-box {
                margin-top: 0.25rem;
            }
            
            .toolbar {
                padding: 0.25rem;
                position: relative;
            }
            
            .toolbar-left {
                margin-bottom: 0.25rem;
            }
        }

        /* Auto-completion hint styling */
        .CodeMirror-hints {
            max-height: 200px;
            overflow-y: auto;
            font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
            font-size: 13px;
            z-index: 10000 !important; /* Higher than modal (1001) */
            position: absolute !important;
            background: white;
            border: 1px solid #ddd;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }

        .CodeMirror-hint {
            padding: 4px 8px;
            border-radius: 3px;
            cursor: pointer;
            position: relative;
            z-index: 10001;
        }

        .CodeMirror-hint-active {
            background: #007acc;
            color: white;
        }

        .cm-variable-hint {
            color: #e06c75;
            font-weight: 500;
        }

        .cm-function-hint {
            color: #61afef;
            font-weight: 500;
        }

        .cm-builtin-hint {
            color: #c678dd;
            font-weight: 500;
        }

        .cm-word-hint {
            color: #98c379;
            font-weight: normal;
        }

        /* Dark theme hints */
        body[data-theme="dark"] .CodeMirror-hints {
            background: #2b2b2b;
            border: 1px solid #444;
            z-index: 10000 !important; /* Maintain high z-index in dark theme */
        }

        body[data-theme="dark"] .CodeMirror-hint {
            color: #abb2bf;
        }

        body[data-theme="dark"] .CodeMirror-hint.CodeMirror-hint-active {
            background: #3e4451;
            color: #ffffff;
        }

        /* Variable/selection highlighting styles */
        .cm-matchhighlight {
            background: #ffd700;
            background: rgba(255, 215, 0, 0.4);
            border-radius: 2px;
            animation: highlightPulse 0.3s ease-in-out;
        }

        .CodeMirror-selectedtext {
            background: #3390ff !important;
            background: rgba(51, 144, 255, 0.3) !important;
            color: inherit !important;
        }

        /* Scrollbar match annotations */
        .CodeMirror-search-match {
            background: #ffff00;
            border: 1px solid #999;
        }

        /* Dark theme match highlighting */
        body[data-theme="dark"] .cm-matchhighlight {
            background: #4a4a00;
            background: rgba(255, 215, 0, 0.3);
        }

        body[data-theme="dark"] .CodeMirror-selectedtext {
            background: #1a4480 !important;
            background: rgba(51, 144, 255, 0.4) !important;
        }

        /* Highlight pulse animation */
        @keyframes highlightPulse {
            0% { background: rgba(255, 215, 0, 0.8); }
            100% { background: rgba(255, 215, 0, 0.4); }
        }

        /* Context Menu */
        .context-menu {
            position: fixed;
            background: var(--bg-primary);
            border: 1px solid var(--border-color);
            border-radius: var(--radius);
            box-shadow: var(--shadow-lg);
            min-width: 200px;
            z-index: 10000;
            overflow: hidden;
            animation: contextMenuFadeIn 0.15s ease;
        }

        @keyframes contextMenuFadeIn {
            from {
                opacity: 0;
                transform: scale(0.95);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        .context-menu-item {
            padding: 0.625rem 1rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            color: var(--text-primary);
            font-size: 0.875rem;
            transition: background 0.15s ease;
            user-select: none;
        }

        .context-menu-item:hover {
            background: var(--bg-hover);
        }

        .context-menu-item i {
            width: 16px;
            text-align: center;
            color: var(--text-muted);
        }

        .context-menu-divider {
            height: 1px;
            background: var(--border-light);
            margin: 0.25rem 0;
        }

        .context-menu-item.disabled {
            opacity: 0.5;
            cursor: not-allowed;
            pointer-events: none;
        }

        /* Dark theme context menu */
        body[data-theme="dark"] .context-menu {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }

        /* Drag selection rectangle */
        .drag-selection-rect {
            position: fixed;
            border: 2px solid var(--accent-color);
            background: rgba(0, 158, 247, 0.1);
            pointer-events: none;
            z-index: 10000;
            border-radius: 2px;
        }

        /* Prevent text selection during drag */
        .drag-selecting {
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
        }

        /* Drag and drop styles */
        .file-grid-item.dragging,
        .file-list-item.dragging {
            opacity: 0.5;
            cursor: move;
        }

        .file-grid-item.drag-over,
        .file-list-item.drag-over {
            background: var(--accent-color) !important;
            border: 2px dashed var(--accent-color);
            opacity: 0.8;
        }

        .file-grid-item.drag-over .file-grid-name,
        .file-list-item.drag-over .file-name {
            color: white;
            font-weight: bold;
        }

        /* Drop zone for individual breadcrumb items */
        .breadcrumb-item.breadcrumb-item-drop-active {
            background: var(--accent-color);
            border: 2px solid rgba(255, 255, 255, 0.8);
            border-radius: 6px;
            box-shadow: 0 0 12px rgba(0, 158, 247, 0.6);
            transform: scale(1.08);
            transition: all 0.15s ease;
            padding: 2px 8px;
            margin: -2px -8px; /* Compensate for padding */
        }

        .breadcrumb-item.breadcrumb-item-drop-active .breadcrumb-link {
            color: white !important;
            font-weight: bold;
        }

        .breadcrumb-drop-target {
            cursor: pointer;
            transition: all 0.15s ease;
        }

        .breadcrumb-drop-target:hover {
            opacity: 0.8;
        }

        .file-grid-item[draggable="true"],
        .file-list-item[draggable="true"] {
            cursor: move;
        }

        /* Expandable folder tree styles */
        .folder-expand-icon {
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: var(--text-secondary);
            transition: var(--transition);
            font-size: 14px;
            font-weight: 600;
        }

        .folder-expand-icon:hover {
            color: var(--accent-color);
            background: var(--bg-hover);
            border-radius: 4px;
        }

        .folder-expand-icon.expanded {
            transform: rotate(90deg);
        }

        .file-list-item[data-depth] {
            padding-left: calc(1.5rem + var(--indent-level) * 25px);
        }

        .file-list-item.nested {
            background: var(--bg-secondary);
        }

        .file-list-item.nested:hover {
            background: var(--bg-hover);
        }

        .folder-expand-icon.loading {
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

    </style>
</head>
<body data-theme="dark" style="background: #151521; color: #ffffff">
    <div class="file-manager-container">
        <!-- Mobile Sidebar Overlay -->
        <div class="sidebar-overlay" id="sidebarOverlay" onclick="closeSidebar()"></div>
        
        <!-- Sidebar -->
        <div class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <div class="sidebar-logo">
                    <i class="fas fa-folder"></i> File Manager
                </div>
                <button class="sidebar-close-btn" onclick="closeSidebar()" title="Close menu"><i class="fas fa-times"></i></button>
            </div>
            <div class="sidebar-nav">
                <div class="nav-section">
                    <div class="nav-section-title">Quick Access</div>
                    <div class="nav-item active" onclick="navigateTo('/'); closeSidebarOnMobile();">
                        <i class="fas fa-home"></i> Home
                    </div>
                    <div class="nav-item" onclick="showUploadModal(); closeSidebarOnMobile();">
                        ⬆️ Upload Files
                    </div>
                    <div class="nav-item" onclick="showUploadUnzipModal(); closeSidebarOnMobile();">
                        <i class="fas fa-upload"></i> Upload & Unzip
                    </div>
                    <div class="nav-item" onclick="showCreateDirModal(); closeSidebarOnMobile();">
                        <i class="fas fa-folder-plus"></i> New Folder
                    </div>
                    <div class="nav-item" onclick="showCreateFileModal(); closeSidebarOnMobile();">
                        <i class="fas fa-file-medical"></i> New File
                    </div>
                </div>
                
                <div class="nav-section">
                    <div class="nav-section-title">Actions</div>
                    <div class="nav-item" onclick="refreshList(); closeSidebarOnMobile();">
                        <i class="fas fa-sync-alt"></i> Refresh
                    </div>
                    <div class="nav-item" onclick="selectAll(); closeSidebarOnMobile();">
                        ☑️ Select All
                    </div>
                </div>
                
                <div class="nav-section">
                    <div class="nav-section-title">Preferences</div>
                    <div class="nav-item" onclick="toggleTheme(); closeSidebarOnMobile();">
                        <i class="fas fa-moon"></i> Toggle Theme
                    </div>
                    <div class="nav-item" onclick="setView(viewMode === 'grid' ? 'list' : 'grid'); closeSidebarOnMobile();">
                        ⚏ Toggle View
                    </div>
                    <div class="nav-item" onclick="resetUserPreferences(); closeSidebarOnMobile();">
                        <i class="fas fa-undo"></i> Reset Settings
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="main-content">
            <!-- Toolbar -->
            <div class="toolbar">
                <div class="toolbar-left">
                    <button class="mobile-menu-toggle" onclick="toggleSidebar()">☰</button>
                    
                    <!-- Breadcrumb Navigation -->
                    <div class="breadcrumb" id="breadcrumb">
                        <div class="breadcrumb-item">
                            <span class="breadcrumb-link" onclick="navigateTo('/')">Home</span>
                        </div>
                    </div>

                    <!-- Search Box -->
                    <div class="search-box">
                        <input type="text" class="search-input" id="searchInput" placeholder="Search files..." onkeyup="searchFiles()">
                        <span class="search-icon"><i class="fas fa-search"></i></span>
                    </div>
                </div>

                <div class="toolbar-right">
                    <!-- View Toggle -->
                    <div class="view-toggle">
                        <button class="view-toggle-btn" onclick="setView('grid')" id="gridViewBtn">⚏</button>
                        <button class="view-toggle-btn active" onclick="setView('list')" id="listViewBtn">☰</button>
                    </div>

                    <!-- Action Buttons -->
                    <button class="btn btn-primary" onclick="showUploadModal()">
                        ⬆️ Upload
                    </button>
                    <button class="btn btn-light toolbar-btn-newfile" onclick="showCreateFileModal()">
                        <i class="fas fa-file-medical"></i> New File
                    </button>
                    <button class="btn btn-light toolbar-btn-newfolder" onclick="showCreateDirModal()">
                        <i class="fas fa-folder-plus"></i> New Folder
                    </button>
                    <button class="btn btn-light toolbar-btn-edit" onclick="editSelected()">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-light toolbar-btn-download" onclick="downloadSelected()">
                        ⬇️ Download
                    </button>
                    <button class="btn btn-light toolbar-btn-copy" onclick="copySelected()">
                        <i class="fas fa-copy"></i> Copy
                    </button>
                    <button class="btn btn-light toolbar-btn-move" onclick="moveSelected()">
                        <i class="fas fa-arrows-alt"></i> Move
                    </button>
                    <button class="btn btn-danger toolbar-btn-delete" onclick="deleteSelected()">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                    
                    <!-- Mobile More Actions Button -->
                    <button class="btn btn-light mobile-more-btn" onclick="toggleMobileActions(); return false;" style="display: none;">
                        ⋯ More
                    </button>
                </div>
                
                <!-- Mobile Actions Dropdown -->
                <div id="mobileActionsDropdown" class="mobile-actions-dropdown" style="display: none;">
                    <button class="btn btn-light" onclick="showCreateFileModal(); hideMobileActions();"><i class="fas fa-file-medical"></i> New File</button>
                    <button class="btn btn-light" onclick="showCreateDirModal(); hideMobileActions();"><i class="fas fa-folder-plus"></i> New Folder</button>
                    <button class="btn btn-light" onclick="editSelected(); hideMobileActions();"><i class="fas fa-edit"></i> Edit</button>
                    <button class="btn btn-light" onclick="downloadSelected(); hideMobileActions();"><i class="fas fa-download"></i> Download</button>
                    <button class="btn btn-light" onclick="copySelected(); hideMobileActions();"><i class="fas fa-copy"></i> Copy</button>
                    <button class="btn btn-light" onclick="moveSelected(); hideMobileActions();"><i class="fas fa-arrows-alt"></i> Move</button>
                    <button class="btn btn-danger" onclick="deleteSelected(); hideMobileActions();"><i class="fas fa-trash"></i> Delete</button>
                </div>
            </div>

            <!-- File List Container -->
            <div class="file-list-container">
                <div id="fileList" class="file-list-table">
                    <!-- Files will be loaded here -->
                </div>
                <div class="loading-overlay" id="loadingOverlay" style="display: none;">
                    <div class="spinner"></div>
                </div>
            </div>

            <!-- Status Bar -->
            <div class="status-bar">
                <div class="status-left">
                    <span id="itemCount">0 items</span> • 
                    <span id="selectedCount">0 selected</span>
                </div>
                <div class="status-right">
                    <span id="currentPath">/</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Upload Modal -->
    <div id="uploadModal" class="modal">
        <div class="modal-content" style="max-width: 600px;">
            <div class="modal-header">Upload Files</div>
            <div class="modal-body">
                <!-- Upload Type Selection -->
                <div class="form-group">
                    <label class="form-label">Upload Type:</label>
                    <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                        <button class="btn btn-light" onclick="setUploadType('files')" id="filesTypeBtn"><i class="fas fa-file"></i> Files</button>
                        <button class="btn btn-light" onclick="setUploadType('folder')" id="folderTypeBtn"><i class="fas fa-folder"></i> Folder</button>
                        <button class="btn btn-light" onclick="setUploadType('zipExtract')" id="zipExtractTypeBtn"><i class="fas fa-file-archive"></i> Zip & Extract</button>
                    </div>
                </div>
                
                <!-- File Input for regular files -->
                <div id="filesUploadSection" class="form-group">
                    <label class="form-label">Select Files:</label>
                    <input type="file" id="fileInput" multiple class="form-control">
                    <small style="color: var(--text-muted); margin-top: 5px; display: block;">Select multiple files to upload</small>
                </div>
                
                <!-- Folder Input -->
                <div id="folderUploadSection" class="form-group" style="display: none;">
                    <label class="form-label">Select Folder:</label>
                    <input type="file" id="folderInput" webkitdirectory multiple class="form-control">
                    <small style="color: var(--text-muted); margin-top: 5px; display: block;">Select a folder to upload (preserves structure) - Upload starts automatically</small>
                </div>
                
                <!-- Zip Upload and Extract -->
                <div id="zipExtractUploadSection" style="display: none;">
                    <div class="form-group">
                        <label class="form-label">Select Archive File:</label>
                        <input type="file" id="zipInput" accept=".zip,.rar,.7z,.tar,.gz" class="form-control">
                        <small style="color: var(--text-muted); margin-top: 5px; display: block;">Upload and automatically extract archive</small>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Extract to folder (optional):</label>
                        <input type="text" id="extractPath" class="form-control" placeholder="Leave empty to extract to current directory">
                    </div>
                    
                </div>
                
                <!-- Upload Progress -->
                <div id="uploadProgress" style="display: none;">
                    <div style="background: var(--bg-secondary); border-radius: var(--radius); padding: 10px; margin: 10px 0;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span id="uploadProgressText">Uploading...</span>
                            <span id="uploadProgressPercent">0%</span>
                        </div>
                        <div style="background: var(--border-color); height: 8px; border-radius: 4px; overflow: hidden;">
                            <div id="uploadProgressBar" style="background: var(--accent-color); height: 100%; width: 0%; transition: width 0.3s ease;"></div>
                        </div>
                    </div>
                </div>
                
                <div id="uploadList"></div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-light" onclick="closeModal('uploadModal')">Cancel</button>
                <button class="btn btn-primary" onclick="performUpload()" id="uploadBtn">Upload</button>
            </div>
        </div>
    </div>

    <!-- Create Directory Modal -->
    <div id="createDirModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">Create New Folder</div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="form-label">Folder Name:</label>
                    <input type="text" id="dirName" class="form-control" placeholder="Enter folder name">
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-light" onclick="closeModal('createDirModal')">Cancel</button>
                <button class="btn btn-success" onclick="createDirectory()">Create</button>
            </div>
        </div>
    </div>
    
    <!-- Create File Modal -->
    <div id="createFileModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">Create New File</div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="form-label">File Name:</label>
                    <input type="text" id="fileName" class="form-control" placeholder="Enter file name (e.g., document.txt, style.css)">
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-light" onclick="closeModal('createFileModal')">Cancel</button>
                <button class="btn btn-success" onclick="createFile()">Create & Edit</button>
            </div>
        </div>
    </div>

    <!-- Rename Modal -->
    <div id="renameModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">Rename</div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="form-label">New Name:</label>
                    <input type="text" id="newName" class="form-control" placeholder="Enter new name">
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-light" onclick="closeModal('renameModal')">Cancel</button>
                <button class="btn btn-primary" onclick="performRename()">Rename</button>
            </div>
        </div>
    </div>
    
    <!-- Move Modal -->
    <div id="moveModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">Move Items</div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="form-label">Choose Destination:</label>
                    <div class="move-destination-options">
                        <button class="btn btn-light" onclick="toggleFolderPicker()" id="folderPickerToggle">
                            <i class="fas fa-folder-open"></i> Browse Folders
                        </button>
                        <button class="btn btn-light" onclick="toggleManualPath()" id="manualPathToggle">
                            <i class="fas fa-keyboard"></i> Manual Path
                        </button>
                    </div>
                </div>

                <!-- Folder Picker Section -->
                <div class="form-group" id="folderPickerSection">
                    <label class="form-label">Browse and select destination folder:</label>
                    <div class="folder-breadcrumb" id="moveBreadcrumb">
                        <span class="breadcrumb-link" onclick="navigateMoveTo('/')"><i class="fas fa-home"></i> Root</span>
                    </div>
                    <div class="folder-picker" id="folderPicker">
                        <div class="folder-picker-loading"><i class="fas fa-spinner fa-spin"></i> Loading folders...</div>
                    </div>
                    <div class="selected-path">
                        <strong>Selected: </strong><span id="selectedMovePath">/</span>
                    </div>
                </div>

                <!-- Manual Path Section -->
                <div class="form-group" id="manualPathSection" style="display: none;">
                    <label class="form-label">Destination Path:</label>
                    <input type="text" id="movePath" class="form-control" placeholder="Enter destination path (e.g., /folder/subfolder)">
                    <small class="form-text">Current directory: <span id="currentMoveDir"></span></small>
                </div>

                <div class="form-group" id="moveItemsList">
                    <label class="form-label">Items to move:</label>
                    <div id="moveItems"></div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-light" onclick="closeModal('moveModal')">Cancel</button>
                <button class="btn btn-primary" onclick="performMove()">Move</button>
            </div>
        </div>
    </div>

    <!-- Copy Modal -->
    <div id="copyModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">Copy Items</div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="form-label">Choose Destination:</label>
                    <div class="move-destination-options">
                        <button class="btn btn-light" onclick="toggleCopyFolderPicker()" id="copyFolderPickerToggle">
                            <i class="fas fa-folder-open"></i> Browse Folders
                        </button>
                        <button class="btn btn-light" onclick="toggleCopyManualPath()" id="copyManualPathToggle">
                            <i class="fas fa-keyboard"></i> Manual Path
                        </button>
                    </div>
                </div>

                <!-- Folder Picker Section -->
                <div class="form-group" id="copyFolderPickerSection">
                    <label class="form-label">Browse and select destination folder:</label>
                    <div class="folder-breadcrumb" id="copyBreadcrumb">
                        <span class="breadcrumb-link" onclick="navigateCopyTo('/')"><i class="fas fa-home"></i> Root</span>
                    </div>
                    <div class="folder-picker" id="copyFolderPicker">
                        <div class="folder-picker-loading"><i class="fas fa-spinner fa-spin"></i> Loading folders...</div>
                    </div>
                    <div class="selected-path">
                        <strong>Selected: </strong><span id="selectedCopyPath">/</span>
                    </div>
                </div>

                <!-- Manual Path Section -->
                <div class="form-group" id="copyManualPathSection" style="display: none;">
                    <label class="form-label">Destination Path:</label>
                    <input type="text" id="copyPath" class="form-control" placeholder="Enter destination path (e.g., /folder/subfolder)">
                    <small class="form-text">Current directory: <span id="currentCopyDir"></span></small>
                </div>

                <div class="form-group" id="copyItemsList">
                    <label class="form-label">Items to copy:</label>
                    <div id="copyItems"></div>
                </div>

                <!-- New filename input (only shown for single file copy) -->
                <div class="form-group" id="copyFilenameSection" style="display: none;">
                    <label class="form-label">New filename (optional):</label>
                    <input type="text" id="copyNewFilename" class="form-control" placeholder="Leave empty to keep original filename">
                    <small class="form-text">Default: <span id="copyOriginalFilename"></span></small>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-light" onclick="closeModal('copyModal')">Cancel</button>
                <button class="btn btn-primary" onclick="performCopy()">Copy</button>
            </div>
        </div>
    </div>

    <!-- Editor Modal -->
    <div id="editorModal" class="modal">
        <div class="modal-content" style="max-width: 90%; width: 90%; height: 90vh; display: flex; flex-direction: column;">
            <div class="modal-header" style="display: flex; justify-content: space-between; align-items: center; flex-shrink: 0;">
                <div>
                    Edit File: <span id="editFileName"></span>
                    <span id="fileType" style="color: var(--text-muted); margin-left: 10px;"></span>
                </div>
                <div style="display: flex; gap: 10px;">
                    <button class="btn btn-light" onclick="toggleWysiwyg()" id="wysiwygBtn" style="display: none;">
                        <i class="fas fa-eye"></i> WYSIWYG
                    </button>
                    <button class="btn btn-light" onclick="formatCode()">
                        <i class="fas fa-paint-brush"></i> Format
                    </button>
                </div>
            </div>
            <div class="modal-body" style="display: flex; flex: 1; padding: 0; overflow: hidden; min-height: 0;">
                <div id="editorContainer" style="flex: 1; position: relative; overflow: hidden;">
                    <textarea id="codeEditor" style="width: 100%; height: 100%; display: none;"></textarea>
                </div>
                <div id="wysiwygContainer" style="flex: 1; display: none; overflow: auto;">
                    <textarea id="wysiwygEditor"></textarea>
                </div>
                <div id="previewContainer" style="flex: 1; display: none; padding: 20px; overflow: auto; background: var(--bg-secondary); border-left: 1px solid var(--border-color);">
                    <iframe id="previewFrame" style="width: 100%; height: 100%; border: none; background: white;"></iframe>
                </div>
            </div>
            <div class="modal-footer" style="display: flex; justify-content: space-between; flex-shrink: 0;">
                <div>
                    <span id="editorStatus" style="color: var(--text-muted);">Ready</span>
                </div>
                <div style="display: flex; gap: 10px;">
                    <button id="previewBtn" class="btn btn-light" onclick="togglePreview()" style="display: none;"><i class="fas fa-eye"></i> Preview</button>
                    <button class="btn btn-light" onclick="closeModal('editorModal')">Cancel</button>
                    <button class="btn btn-primary" onclick="saveFile(false)"><i class="fas fa-save"></i> Save</button>
                    <button class="btn btn-success" onclick="saveFile(true)"><i class="fas fa-save"></i> Save & Close</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Context Menu -->
    <div id="contextMenu" class="context-menu" style="display: none;">
        <div class="context-menu-item" data-action="newfolder">
            <i class="fas fa-folder-plus"></i> New Folder
        </div>
        <div class="context-menu-item" data-action="newfile">
            <i class="fas fa-file-medical"></i> New File
        </div>
        <div class="context-menu-item" data-action="upload">
            <i class="fas fa-upload"></i> Upload
        </div>
        <div class="context-menu-divider"></div>
        <div class="context-menu-item" data-action="edit">
            <i class="fas fa-file-edit"></i> Edit
        </div>
        <div class="context-menu-item" data-action="download">
            <i class="fas fa-download"></i> Download
        </div>
        <div class="context-menu-divider"></div>
        <div class="context-menu-item" data-action="rename">
            <i class="fas fa-edit"></i> Rename
        </div>
        <div class="context-menu-item" data-action="copy">
            <i class="fas fa-copy"></i> Copy
        </div>
        <div class="context-menu-item" data-action="move">
            <i class="fas fa-arrows-alt"></i> Move
        </div>
        <div class="context-menu-divider"></div>
        <div class="context-menu-item" data-action="delete">
            <i class="fas fa-trash"></i> Delete
        </div>
    </div>

    <script>
        // Debug mode - enable console logging only when ?debug=1 is in URL
        const urlParams = new URLSearchParams(window.location.search);
        const DEBUG_MODE = urlParams.get('debug') === '1';

        // Override console.log to check debug mode
        const originalConsoleLog = console.log;
        console.log = function(...args) {
            if (DEBUG_MODE) {
                originalConsoleLog.apply(console, args);
            }
        };

        // Keep console.error and console.warn always active for important messages

        // Security: Block developer tools while preserving file manager functionality
        // Allow all developer tools when debug=1 is in URL
        document.addEventListener('keydown', function(e) {
            // Skip all blocking when in debug mode
            if (DEBUG_MODE) {
                return true; // Allow all shortcuts in debug mode
            }

            // Block Ctrl+U (View Source)
            if (e.ctrlKey && e.keyCode === 85) {
                e.preventDefault();
                return false;
            }
            // Block F12 (Developer Tools)
            if (e.keyCode === 123) {
                e.preventDefault();
                return false;
            }
            // Block Ctrl+Shift+I (Developer Tools)
            if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
                e.preventDefault();
                return false;
            }
            // Block Ctrl+Shift+J (Console)
            if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
                e.preventDefault();
                return false;
            }
            // Block Ctrl+Shift+C (Inspect Element)
            if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
                e.preventDefault();
                return false;
            }
        });

        // Selective right-click blocking - allow on interactive elements
        document.addEventListener('contextmenu', function(e) {
            // Allow all right-clicks when in debug mode
            if (DEBUG_MODE) {
                return true; // Allow all right-clicks in debug mode
            }

            // Allow right-click on file manager elements and form inputs
            const allowedElements = 'input, textarea, select, .file-item, .directory-item, .file-grid-item, .file-list-item, .file-grid, .file-list-table, #fileList, #codeEditor, .CodeMirror';

            if (!e.target.closest(allowedElements)) {
                e.preventDefault();
                return false;
            }
        });

        let currentDir = '/';
        let selectedItems = [];
        let viewMode = 'list';
        let allFiles = [];
        let sortColumn = 'name'; // Current sort column: 'name', 'extension', 'size', 'modified'
        let sortDirection = 'asc'; // Sort direction: 'asc' or 'desc'

        // Check for home directory from session (set during login) or URL parameter
        function initializeFromURL() {
            // First check if session has a home directory (from POST/GET during authentication)
            const sessionHome = "\/base4096.infinityfreeapp.com\/htdocs";
            if (sessionHome) {
                currentDir = sessionHome;
                return;
            }

            // Fall back to URL parameter for backward compatibility
            const urlParams = new URLSearchParams(window.location.search);
            const homeDir = urlParams.get('home');
            if (homeDir) {
                currentDir = homeDir;
            }
        }

        // Rate limiting for concurrent requests
        class RequestLimiter {
            constructor(maxConcurrent = 3) {
                this.maxConcurrent = maxConcurrent;
                this.activeRequests = 0;
                this.queue = [];
            }

            async execute(requestFunction) {
                return new Promise((resolve, reject) => {
                    this.queue.push({ requestFunction, resolve, reject });
                    this.processQueue();
                });
            }

            async processQueue() {
                if (this.activeRequests >= this.maxConcurrent || this.queue.length === 0) {
                    return;
                }

                const { requestFunction, resolve, reject } = this.queue.shift();
                this.activeRequests++;

                try {
                    const result = await requestFunction();
                    resolve(result);
                } catch (error) {
                    reject(error);
                } finally {
                    this.activeRequests--;
                    this.processQueue();
                }
            }
        }

        // Create global rate limiter instance
        const requestLimiter = new RequestLimiter(3);

        // Context Menu Variables and Functions
        let contextMenuTarget = null;

        function showContextMenu(e, itemName, itemType, fullPath = null) {
            if (e.preventDefault) e.preventDefault();
            if (e.stopPropagation) e.stopPropagation();

            const contextMenu = document.getElementById('contextMenu');

            // Get position from either mouse event or touch event
            const pageX = e.pageX || (e.touches && e.touches[0] ? e.touches[0].pageX : 0);
            const pageY = e.pageY || (e.touches && e.touches[0] ? e.touches[0].pageY : 0);

            // Check if the right-clicked item is part of the selection
            const isPartOfSelection = itemName && selectedItems.some(item => item.name === itemName);
            const useSelection = isPartOfSelection && selectedItems.length > 0;

            // Determine target directory for new file/folder/upload operations
            let targetDir = currentDir;

            if (itemType === 'dir' && itemName && itemName !== '..') {
                // Right-clicking on a folder - use that folder's path
                targetDir = fullPath || (currentDir === '/' ? '/' + itemName : currentDir + '/' + itemName);
            } else if (itemType === 'file' && fullPath) {
                // Right-clicking on a file in expanded folder - use the file's parent directory
                targetDir = fullPath.substring(0, fullPath.lastIndexOf('/')) || '/';
            }

            contextMenuTarget = {
                name: itemName,
                type: itemType,
                fullPath: fullPath,
                targetDir: targetDir,
                useSelection: useSelection,
                selectedCount: useSelection ? selectedItems.length : 1
            };

            // Get all menu items
            const editItem = contextMenu.querySelector('[data-action="edit"]');
            const downloadItem = contextMenu.querySelector('[data-action="download"]');
            const renameItem = contextMenu.querySelector('[data-action="rename"]');
            const copyItem = contextMenu.querySelector('[data-action="copy"]');
            const moveItem = contextMenu.querySelector('[data-action="move"]');
            const deleteItem = contextMenu.querySelector('[data-action="delete"]');
            const newFolderItem = contextMenu.querySelector('[data-action="newfolder"]');
            const newFileItem = contextMenu.querySelector('[data-action="newfile"]');
            const uploadItem = contextMenu.querySelector('[data-action="upload"]');

            // Show/hide items based on context
            // New folder, new file, and upload are always visible
            newFolderItem.style.display = 'flex';
            newFileItem.style.display = 'flex';
            uploadItem.style.display = 'flex';

            if (itemName) {
                // Right-clicked on a file or folder
                const isFile = itemType === 'file';
                const multipleSelected = useSelection && selectedItems.length > 1;

                editItem.style.display = (isFile && !multipleSelected) ? 'flex' : 'none';
                downloadItem.style.display = 'flex';
                renameItem.style.display = multipleSelected ? 'none' : 'flex';
                copyItem.style.display = 'flex';
                moveItem.style.display = 'flex';
                deleteItem.style.display = 'flex';

                // Update text for multiple selections
                if (multipleSelected) {
                    downloadItem.innerHTML = `<i class="fas fa-download"></i> Download Selected (${selectedItems.length})`;
                    copyItem.innerHTML = `<i class="fas fa-copy"></i> Copy Selected (${selectedItems.length})`;
                    moveItem.innerHTML = `<i class="fas fa-arrows-alt"></i> Move Selected (${selectedItems.length})`;
                    deleteItem.innerHTML = `<i class="fas fa-trash"></i> Delete Selected (${selectedItems.length})`;
                } else {
                    downloadItem.innerHTML = '<i class="fas fa-download"></i> Download';
                    copyItem.innerHTML = '<i class="fas fa-copy"></i> Copy';
                    moveItem.innerHTML = '<i class="fas fa-arrows-alt"></i> Move';
                    deleteItem.innerHTML = '<i class="fas fa-trash"></i> Delete';
                }
            } else {
                // Right-clicked on empty space
                editItem.style.display = 'none';
                downloadItem.style.display = 'none';
                renameItem.style.display = 'none';
                copyItem.style.display = 'none';
                moveItem.style.display = 'none';
                deleteItem.style.display = 'none';
            }

            // Position the menu
            contextMenu.style.display = 'block';
            contextMenu.style.left = pageX + 'px';
            contextMenu.style.top = pageY + 'px';

            // Adjust position if menu goes off screen
            const menuRect = contextMenu.getBoundingClientRect();
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            if (menuRect.right > windowWidth) {
                contextMenu.style.left = (pageX - menuRect.width) + 'px';
            }
            if (menuRect.bottom > windowHeight) {
                contextMenu.style.top = (pageY - menuRect.height) + 'px';
            }
        }

        function hideContextMenu() {
            const contextMenu = document.getElementById('contextMenu');
            contextMenu.style.display = 'none';
            contextMenuTarget = null;
        }

        // Handle context menu item clicks
        document.addEventListener('DOMContentLoaded', function() {
            const contextMenu = document.getElementById('contextMenu');
            const fileList = document.getElementById('fileList');

            // Add right-click handler to file list for empty space
            if (fileList) {
                fileList.addEventListener('contextmenu', function(e) {
                    // Check if clicked directly on the file list container (empty space)
                    if (e.target === fileList || e.target.classList.contains('file-grid') || e.target.classList.contains('file-list-table')) {
                        showContextMenu(e, null, null);
                    }
                });
            }

            contextMenu.querySelectorAll('.context-menu-item').forEach(item => {
                item.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const action = this.getAttribute('data-action');

                    // Handle actions that work regardless of context
                    // Use targetDir from contextMenuTarget if available
                    const targetDir = contextMenuTarget ? contextMenuTarget.targetDir : currentDir;

                    if (action === 'newfolder') {
                        showCreateDirModal(targetDir);
                        hideContextMenu();
                        return;
                    } else if (action === 'newfile') {
                        showCreateFileModal(targetDir);
                        hideContextMenu();
                        return;
                    } else if (action === 'upload') {
                        showUploadModal(targetDir);
                        hideContextMenu();
                        return;
                    }

                    if (contextMenuTarget) {
                        const { name, type, fullPath, useSelection, selectedCount } = contextMenuTarget;

                        switch(action) {
                            case 'edit':
                                if (type === 'file' && (!useSelection || selectedCount === 1)) editFile(name, fullPath);
                                break;
                            case 'download':
                                if (useSelection) {
                                    downloadSelected();
                                } else if (type === 'file') {
                                    downloadFile(name, e, fullPath);
                                } else {
                                    downloadFolder(name, e, fullPath);
                                }
                                break;
                            case 'rename':
                                if (!useSelection) renameItem(name, e, fullPath);
                                break;
                            case 'copy':
                                if (useSelection) {
                                    copySelected();
                                } else {
                                    copyItem(name, type, e, fullPath);
                                }
                                break;
                            case 'move':
                                if (useSelection) {
                                    moveSelected();
                                } else {
                                    moveItem(name, type, e, fullPath);
                                }
                                break;
                            case 'delete':
                                if (useSelection) {
                                    deleteSelected();
                                } else {
                                    deleteItem(name, type, e, fullPath);
                                }
                                break;
                        }
                    }

                    hideContextMenu();
                });
            });

            // Hide context menu when clicking outside
            document.addEventListener('click', hideContextMenu);
        });

        // Cookie utility functions
        function setCookie(name, value, days = 365) {
            const expires = new Date();
            expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
            document.cookie = name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/;SameSite=Lax';
        }

        function getCookie(name) {
            const nameEQ = name + "=";
            const ca = document.cookie.split(';');
            for(let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        function deleteCookie(name) {
            document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize from URL parameters first
            initializeFromURL();

            // Load user preferences from cookies
            loadUserPreferences();

            refreshList();

            // Initialize drag selection
            initDragSelection();

            // Auto-upload folder when selected
            document.getElementById('folderInput').addEventListener('change', function() {
                if (this.files.length > 0 && currentUploadType === 'folder') {
                    // Automatically start upload when folder is selected
                    uploadFolder();
                }
            });

            // Keyboard support for sidebar
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    closeSidebar();
                    hideMobileActions();
                }
            });
        });

        // Load user preferences from cookies
        function loadUserPreferences() {
            // Load theme preference (default to dark if no preference set)
            // Note: Theme is already set server-side, but this ensures consistency
            const savedTheme = getCookie('filemanager_theme') || 'dark';
            document.documentElement.setAttribute('data-theme', savedTheme);
            document.body.setAttribute('data-theme', savedTheme);

            // Load view mode preference (default to list if no preference set)
            const savedViewMode = getCookie('filemanager_viewmode');
            if (savedViewMode && (savedViewMode === 'grid' || savedViewMode === 'list')) {
                viewMode = savedViewMode;
            }
            // Update UI buttons to reflect current view mode
            document.getElementById('gridViewBtn').classList.toggle('active', viewMode === 'grid');
            document.getElementById('listViewBtn').classList.toggle('active', viewMode === 'list');

            
            // Show a brief confirmation that preferences were loaded
            if (savedTheme || savedViewMode) {
                showPreferenceMessage('Preferences loaded from cookies');
            }
        }

        // Save all current preferences
        function saveUserPreferences() {
            const currentTheme = document.body.getAttribute('data-theme') || 'dark';
            setCookie('filemanager_theme', currentTheme);
            setCookie('filemanager_viewmode', viewMode);
        }

        // Reset all preferences to defaults
        function resetUserPreferences() {
            deleteCookie('filemanager_theme');
            deleteCookie('filemanager_viewmode');

            // Reset to defaults (dark mode and list view)
            document.documentElement.setAttribute('data-theme', 'dark');
            document.body.setAttribute('data-theme', 'dark');
            setView('list');

            showPreferenceMessage('Settings reset to defaults');
        }

        // Show preference message
        function showPreferenceMessage(message) {
            // Use the status area to show preference messages briefly
            const originalStatus = document.getElementById('itemCount').textContent;
            document.getElementById('itemCount').textContent = message;
            document.getElementById('itemCount').style.color = 'var(--accent-color)';
            
            setTimeout(() => {
                updateStatus(); // Restore normal status
                document.getElementById('itemCount').style.color = '';
            }, 2000);
        }

        // Refresh file list
        async function refreshList() {
            showLoader();

            // Save currently expanded folders
            const foldersToReExpand = [];
            expandedFolders.forEach((isExpanded, folderPath) => {
                if (isExpanded) {
                    foldersToReExpand.push(folderPath);
                }
            });

            try {
                const response = await fetch(window.location.href, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: 'action=list&dir=' + encodeURIComponent(currentDir)
                });

                const data = await response.json();
                hideLoader();

                if (data.success) {
                    allFiles = data.items || [];
                    displayFiles(allFiles);
                    updateBreadcrumb();
                    updateStatus();

                    // Re-expand previously expanded folders
                    if (foldersToReExpand.length > 0) {
                        await restoreExpandedFolders(foldersToReExpand);
                    }
                }
            } catch (error) {
                hideLoader();
                console.error('Error:', error);
            }
        }

        // Restore expanded folder state after refresh
        async function restoreExpandedFolders(folderPaths) {

            // Sort by depth (shallowest first) to expand in correct order
            const sorted = folderPaths.sort((a, b) => {
                const depthA = a.split('/').filter(p => p).length;
                const depthB = b.split('/').filter(p => p).length;
                return depthA - depthB;
            });

            for (const folderPath of sorted) {
                // Find the folder element by matching fullPath in dataset
                const allFolders = document.querySelectorAll('.file-list-item[data-type="dir"]');
                let folderElement = null;

                for (const folder of allFolders) {
                    if (folder.dataset.fullPath === folderPath) {
                        folderElement = folder;
                        break;
                    }
                }

                if (folderElement) {
                    const expandIcon = folderElement.querySelector('.folder-expand-icon');
                    const folderName = folderElement.dataset.name;

                    if (expandIcon && !expandIcon.classList.contains('expanded')) {
                        // Small delay to ensure DOM is ready
                        await new Promise(resolve => setTimeout(resolve, 100));
                        await loadFolderContents(folderElement, folderName, folderPath);
                        expandIcon.classList.add('expanded');
                        expandedFolders.set(folderPath, true);
                    }
                }
            }
        }

        // Helper function to get file extension
        function getFileExtension(filename) {
            if (!filename) return '';

            // Hidden files (files starting with .) have no extension
            // Examples: .htaccess, .gitignore, .env.local, .htpasswd.123 all return empty
            if (filename.startsWith('.')) {
                return '';
            }

            // Regular files - check if there's a dot
            const lastDotIndex = filename.lastIndexOf('.');
            if (lastDotIndex === -1 || lastDotIndex === 0) return '';
            return filename.substring(lastDotIndex + 1).toLowerCase();
        }

        // Sorting functions
        function sortFiles(items) {
            // Create a copy to avoid mutating the original array
            const sortedItems = [...items];

            sortedItems.sort((a, b) => {
                // Always put directories first, then files
                if (a.type !== b.type) {
                    return a.type === 'dir' ? -1 : 1;
                }

                // Then sort by the selected column
                let compareResult = 0;

                if (sortColumn === 'name') {
                    compareResult = a.name.toLowerCase().localeCompare(b.name.toLowerCase());
                } else if (sortColumn === 'extension') {
                    const extA = getFileExtension(a.name);
                    const extB = getFileExtension(b.name);
                    compareResult = extA.localeCompare(extB);
                    // If extensions are the same, sort by name
                    if (compareResult === 0) {
                        compareResult = a.name.toLowerCase().localeCompare(b.name.toLowerCase());
                    }
                } else if (sortColumn === 'size') {
                    compareResult = (a.size || 0) - (b.size || 0);
                } else if (sortColumn === 'modified') {
                    // Compare dates - convert to timestamps
                    const dateA = new Date(a.modified || a.date || 0).getTime();
                    const dateB = new Date(b.modified || b.date || 0).getTime();
                    compareResult = dateA - dateB;
                }

                // Apply sort direction
                return sortDirection === 'asc' ? compareResult : -compareResult;
            });

            return sortedItems;
        }

        function setSortColumn(column) {
            if (sortColumn === column) {
                // Toggle direction if clicking the same column
                sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                // New column, default to ascending
                sortColumn = column;
                sortDirection = 'asc';
            }

            // Re-render the current file list with new sorting
            if (allFiles.length > 0) {
                displayFiles(allFiles);
            }
        }

        // Display files
        function displayFiles(items) {
            const fileList = document.getElementById('fileList');
            fileList.innerHTML = '';

            // Sort items before displaying
            const sortedItems = sortFiles(items);

            if (viewMode === 'grid') {
                fileList.className = 'file-grid';

                // Add parent directory entry if not in root
                if (currentDir !== '/') {
                    const parentDiv = createGridItem({
                        name: '..',
                        type: 'dir',
                        size: 0,
                        date: ''
                    });
                    parentDiv.classList.add('parent-dir');
                    fileList.appendChild(parentDiv);
                }

                sortedItems.forEach(item => {
                    // Set fullPath for top-level items as well
                    const itemFullPath = currentDir === '/' ? '/' + item.name : currentDir + '/' + item.name;
                    const div = createGridItem(item, itemFullPath);
                    fileList.appendChild(div);
                });
            } else {
                fileList.className = 'file-list-table';

                // Add header
                const header = document.createElement('div');
                header.className = 'file-list-header';

                // Create sortable headers
                const getSortIndicator = (column) => {
                    if (sortColumn !== column) return '↕';
                    return sortDirection === 'asc' ? '↑' : '↓';
                };

                header.innerHTML = `
                    <div><input type="checkbox" id="selectAllCheckbox" title="Select All"></div>
                    <div></div>
                    <div></div>
                    <div class="sortable-header ${sortColumn === 'name' ? 'active' : ''}" data-column="name">
                        <span>NAME</span>
                        <span class="sort-indicator">${getSortIndicator('name')}</span>
                    </div>
                    <div class="sortable-header file-extension ${sortColumn === 'extension' ? 'active' : ''}" data-column="extension">
                        <span>EXTENSION</span>
                        <span class="sort-indicator">${getSortIndicator('extension')}</span>
                    </div>
                    <div class="sortable-header ${sortColumn === 'size' ? 'active' : ''}" data-column="size">
                        <span>SIZE</span>
                        <span class="sort-indicator">${getSortIndicator('size')}</span>
                    </div>
                    <div class="sortable-header file-date ${sortColumn === 'modified' ? 'active' : ''}" data-column="modified">
                        <span>MODIFIED</span>
                        <span class="sort-indicator">${getSortIndicator('modified')}</span>
                    </div>
                    <div class="file-actions">ACTIONS</div>
                `;

                // Add click handlers to sortable headers
                header.querySelectorAll('.sortable-header').forEach(headerCell => {
                    headerCell.addEventListener('click', () => {
                        const column = headerCell.getAttribute('data-column');
                        setSortColumn(column);
                    });
                });

                // Add select all checkbox handler
                const selectAllCheckbox = header.querySelector('#selectAllCheckbox');
                if (selectAllCheckbox) {
                    selectAllCheckbox.addEventListener('change', function(e) {
                        e.stopPropagation();
                        if (this.checked) {
                            selectAll();
                        } else {
                            clearSelection();
                        }
                    });
                }

                fileList.appendChild(header);

                // Add parent directory entry if not in root
                if (currentDir !== '/') {
                    const parentDiv = createListItem({
                        name: '..',
                        type: 'dir',
                        size: 0,
                        date: ''
                    });
                    parentDiv.classList.add('parent-dir');
                    fileList.appendChild(parentDiv);
                }

                sortedItems.forEach(item => {
                    // Set fullPath for top-level items as well
                    const itemFullPath = currentDir === '/' ? '/' + item.name : currentDir + '/' + item.name;
                    const div = createListItem(item, itemFullPath);
                    fileList.appendChild(div);
                });
            }
        }

        // Create grid item
        function createGridItem(item, fullPath = null) {
            const div = document.createElement('div');
            div.className = 'file-grid-item';
            div.dataset.name = item.name;
            div.dataset.type = item.type;

            // Store full path for nested items
            if (fullPath) {
                div.dataset.fullPath = fullPath;
            }

            // Hide checkbox for parent directory
            const checkboxHtml = item.name === '..' ? '' : '<input type="checkbox" class="file-grid-checkbox" onclick="toggleSelection(this, event)">';

            div.innerHTML = `
                ${checkboxHtml}
                <div class="file-grid-icon">${getFileIcon(item)}</div>
                <div class="file-grid-name" title="${item.name}">${item.name}</div>
                <div class="file-grid-size">${item.type === 'dir' ? '' : formatSize(item.size)}</div>
            `;

            // Long press detection for mobile
            let longPressTimer = null;
            let longPressTriggered = false;
            let isTouchDevice = false;

            div.addEventListener('touchstart', (e) => {
                isTouchDevice = true;

                if (e.target.type === 'checkbox' || e.target.classList.contains('file-grid-checkbox')) {
                    return;
                }

                longPressTriggered = false;
                longPressTimer = setTimeout(() => {
                    longPressTriggered = true;
                    // Show context menu on long press
                    showContextMenu(e.touches[0], item.name, item.type, div.dataset.fullPath || null);
                }, 500); // 500ms long press
            });

            div.addEventListener('touchmove', (e) => {
                if (longPressTimer) {
                    clearTimeout(longPressTimer);
                    longPressTimer = null;
                }
            });

            div.addEventListener('touchend', (e) => {
                if (longPressTimer) {
                    clearTimeout(longPressTimer);
                    longPressTimer = null;
                }

                // If long press was triggered, prevent further action
                if (longPressTriggered) {
                    e.preventDefault();
                    longPressTriggered = false;
                    return;
                }

                // Single tap on directory navigates - only if tapping on icon or name
                if (e.target.type === 'checkbox' || e.target.classList.contains('file-grid-checkbox')) {
                    return;
                }

                // Only navigate if tapping on icon or name elements in grid view
                if (e.target.classList.contains('file-grid-icon') ||
                    e.target.classList.contains('file-grid-name') ||
                    e.target.closest('.file-grid-icon') ||
                    e.target.closest('.file-grid-name')) {
                    if (item.type === 'dir') {
                        if (item.name === '..') {
                            const parentDir = currentDir.substring(0, currentDir.lastIndexOf('/')) || '/';
                            navigateTo(parentDir);
                        } else {
                            // Use fullPath from dataset if available (for nested items)
                            const folderPath = div.dataset.fullPath || (currentDir + '/' + item.name);
                            navigateTo(folderPath);
                        }
                    }
                }
            });

            // Single click for directories on desktop
            div.onclick = (e) => {
                // Skip if clicking on checkbox
                if (e.target.type === 'checkbox' || e.target.classList.contains('file-grid-checkbox')) {
                    return;
                }

                // Only navigate if clicking on icon or name elements in grid view
                if (e.target.classList.contains('file-grid-icon') ||
                    e.target.classList.contains('file-grid-name') ||
                    e.target.closest('.file-grid-icon') ||
                    e.target.closest('.file-grid-name')) {
                    if (item.type === 'dir') {
                        if (item.name === '..') {
                            // Navigate to parent directory
                            const parentDir = currentDir.substring(0, currentDir.lastIndexOf('/')) || '/';
                            navigateTo(parentDir);
                        } else {
                            navigateTo(currentDir + '/' + item.name);
                        }
                    }
                }
            };

            // Double click for files on desktop (disabled on touch devices)
            div.ondblclick = (e) => {
                if (!isTouchDevice && item.type === 'file') {
                    // Use fullPath from dataset if available (for nested items)
                    const filePath = div.dataset.fullPath || null;
                    editFile(item.name, filePath);
                }
            };

            // Add right-click context menu
            if (item.name !== '..') {
                div.oncontextmenu = (e) => {
                    showContextMenu(e, item.name, item.type, div.dataset.fullPath || null);
                };
            }

            // Setup drag and drop events
            setupDragEvents(div, item.name, item.type);

            return div;
        }

        // Create list item
        function createListItem(item, fullPath = null) {
            const div = document.createElement('div');
            div.className = 'file-list-item';
            div.dataset.name = item.name;
            div.dataset.type = item.type;

            // Store full path for nested items
            if (fullPath) {
                div.dataset.fullPath = fullPath;
            }

            // Hide checkbox and actions for parent directory
            const checkboxHtml = item.name === '..' ? '<div></div>' : '<div><input type="checkbox" class="file-checkbox" onclick="toggleSelection(this, event)"></div>';
            const actionsHtml = item.name === '..' ? '<div class="file-actions"></div>' : `
                <div class="file-actions">
                    ${item.type === 'file' ? '<button class="action-btn" onclick="editFileFromTree(this)" title="Edit"><i class="fas fa-edit"></i></button>' : ''}
                    ${item.type === 'file' ? '<button class="action-btn" onclick="downloadFileFromTree(this, event)" title="Download"><i class="fas fa-download"></i></button>' : '<button class="action-btn" onclick="downloadFolderFromTree(this, event)" title="Download Folder as ZIP"><i class="fas fa-file-archive"></i></button>'}
                    <button class="action-btn" onclick="renameItemFromTree(this, event)" title="Rename"><i class="fas fa-edit"></i></button>
                    <button class="action-btn" onclick="copyItemFromTree(this, event)" title="Copy"><i class="fas fa-copy"></i></button>
                    <button class="action-btn" onclick="moveItemFromTree(this, event)" title="Move"><i class="fas fa-arrows-alt"></i></button>
                    <button class="action-btn" onclick="deleteItemFromTree(this, event)" title="Delete"><i class="fas fa-trash"></i></button>
                </div>
            `;

            const extension = item.type === 'file' ? getFileExtension(item.name) : '-';

            // Add expand icon for folders (except parent directory)
            const expandIconHtml = (item.type === 'dir' && item.name !== '..') ?
                '<div class="folder-expand-icon" data-folder-name="' + item.name + '"><i class="fas fa-chevron-right"></i></div>' :
                '<div></div>';

            div.innerHTML = `
                ${checkboxHtml}
                ${expandIconHtml}
                <div class="file-icon">${getFileIcon(item)}</div>
                <div class="file-name" title="${item.name}">${item.name}</div>
                <div class="file-extension">${extension || '-'}</div>
                <div class="file-size">${item.type === 'dir' ? '-' : formatSize(item.size)}</div>
                <div class="file-date">${item.date || item.modified || ''}</div>
                ${actionsHtml}
            `;

            // Long press detection for mobile
            let longPressTimer = null;
            let longPressTriggered = false;
            let isTouchDevice = false;

            div.addEventListener('touchstart', (e) => {
                isTouchDevice = true;

                // Don't interfere with checkboxes or action buttons
                if (e.target.type === 'checkbox' ||
                    e.target.classList.contains('file-checkbox') ||
                    e.target.closest('.action-btn') ||
                    e.target.closest('.file-actions')) {
                    return;
                }

                longPressTriggered = false;
                longPressTimer = setTimeout(() => {
                    longPressTriggered = true;
                    // Show context menu on long press
                    showContextMenu(e.touches[0], item.name, item.type, div.dataset.fullPath || null);
                }, 500); // 500ms long press
            });

            div.addEventListener('touchmove', (e) => {
                if (longPressTimer) {
                    clearTimeout(longPressTimer);
                    longPressTimer = null;
                }
            });

            div.addEventListener('touchend', (e) => {
                if (longPressTimer) {
                    clearTimeout(longPressTimer);
                    longPressTimer = null;
                }

                // If long press was triggered, prevent further action
                if (longPressTriggered) {
                    e.preventDefault();
                    longPressTriggered = false;
                    return;
                }

                // Single tap on directory navigates - only if tapping on icon or name
                if (e.target.type === 'checkbox' ||
                    e.target.classList.contains('file-checkbox') ||
                    e.target.closest('.action-btn') ||
                    e.target.closest('.file-actions')) {
                    return;
                }

                // Only navigate if tapping on icon or name elements
                if (e.target.classList.contains('file-icon') ||
                    e.target.classList.contains('file-name') ||
                    e.target.closest('.file-icon') ||
                    e.target.closest('.file-name')) {
                    if (item.type === 'dir') {
                        if (item.name === '..') {
                            const parentDir = currentDir.substring(0, currentDir.lastIndexOf('/')) || '/';
                            navigateTo(parentDir);
                        } else {
                            // Use fullPath from dataset if available (for nested items)
                            const folderPath = div.dataset.fullPath || (currentDir + '/' + item.name);
                            navigateTo(folderPath);
                        }
                    }
                }
            });

            // Single click for directories on desktop
            div.onclick = (e) => {
                // Skip if clicking on checkbox or action buttons
                if (e.target.type === 'checkbox' ||
                    e.target.classList.contains('file-checkbox') ||
                    e.target.closest('.action-btn') ||
                    e.target.closest('.file-actions')) {
                    return;
                }

                // Only navigate if clicking on icon or name elements in list view
                if (e.target.classList.contains('file-icon') ||
                    e.target.classList.contains('file-name') ||
                    e.target.closest('.file-icon') ||
                    e.target.closest('.file-name')) {
                    if (item.type === 'dir') {
                        if (item.name === '..') {
                            // Navigate to parent directory
                            const parentDir = currentDir.substring(0, currentDir.lastIndexOf('/')) || '/';
                            navigateTo(parentDir);
                        } else {
                            navigateTo(currentDir + '/' + item.name);
                        }
                    }
                }
            };

            // Double click for files on desktop (disabled on touch devices)
            div.ondblclick = (e) => {
                if (!isTouchDevice && item.type === 'file') {
                    // Use fullPath from dataset if available (for nested items)
                    const filePath = div.dataset.fullPath || null;
                    editFile(item.name, filePath);
                }
            };

            // Add right-click context menu
            if (item.name !== '..') {
                div.oncontextmenu = (e) => {
                    showContextMenu(e, item.name, item.type, div.dataset.fullPath || null);
                };
            }

            // Setup folder expand/collapse
            if (item.type === 'dir' && item.name !== '..') {
                const expandIcon = div.querySelector('.folder-expand-icon');
                if (expandIcon) {
                    expandIcon.addEventListener('click', (e) => {
                        e.stopPropagation();
                        toggleFolderExpansion(div, item.name, expandIcon);
                    });
                }
            }

            // Setup drag and drop events
            setupDragEvents(div, item.name, item.type);

            return div;
        }

        // Get file icon
        function getFileIcon(item) {
            if (item.type === 'dir') {
                if (item.name === '..') {
                    return '<i class="fas fa-arrow-up"></i>'; // Up arrow for parent directory
                }
                return '<i class="fas fa-folder"></i>';
            }

            const filename = item.name.toLowerCase();

            // Special files
            if (filename === '.htaccess') return '<i class="fas fa-cog"></i>';
            if (filename === '.htpasswd') return '<i class="fas fa-lock"></i>';
            if (filename === '.gitignore') return '<i class="fab fa-git-alt"></i>';
            if (filename === '.env') return '<i class="fas fa-cog"></i>';
            if (filename === 'dockerfile') return '<i class="fab fa-docker"></i>';
            if (filename === 'makefile') return '<i class="fas fa-hammer"></i>';
            if (filename.startsWith('readme')) return '<i class="fas fa-book-open"></i>';
            if (filename.startsWith('license')) return '<i class="fas fa-certificate"></i>';
            if (filename.startsWith('changelog')) return '<i class="fas fa-clipboard-list"></i>';

            const ext = item.name.split('.').pop().toLowerCase();
            const icons = {
                'txt': '<i class="fas fa-file-alt"></i>', 'pdf': '<i class="fas fa-file-pdf"></i>', 'doc': '<i class="fas fa-file-word"></i>', 'docx': '<i class="fas fa-file-word"></i>',
                'xls': '<i class="fas fa-file-excel"></i>', 'xlsx': '<i class="fas fa-file-excel"></i>', 'jpg': '<i class="fas fa-file-image"></i>', 'png': '<i class="fas fa-file-image"></i>', 'gif': '<i class="fas fa-file-image"></i>',
                'mp3': '<i class="fas fa-file-audio"></i>', 'mp4': '<i class="fas fa-file-video"></i>', 'avi': '<i class="fas fa-file-video"></i>', 'mov': '<i class="fas fa-file-video"></i>',
                'zip': '<i class="fas fa-file-archive"></i>', 'rar': '<i class="fas fa-file-archive"></i>', '7z': '<i class="fas fa-file-archive"></i>', 'tar': '<i class="fas fa-file-archive"></i>', 'gz': '<i class="fas fa-file-archive"></i>',
                'html': '<i class="fab fa-html5"></i>', 'htm': '<i class="fab fa-html5"></i>', 'css': '<i class="fab fa-css3-alt"></i>', 'js': '<i class="fab fa-js-square"></i>', 'ts': '<i class="fab fa-js-square"></i>',
                'php': '<i class="fab fa-php"></i>', 'py': '<i class="fab fa-python"></i>', 'java': '<i class="fab fa-java"></i>', 'c': '<i class="fas fa-file-code"></i>', 'cpp': '<i class="fas fa-file-code"></i>',
                'json': '<i class="fas fa-file-code"></i>', 'xml': '<i class="fas fa-file-code"></i>', 'yaml': '<i class="fas fa-file-code"></i>', 'yml': '<i class="fas fa-file-code"></i>',
                'md': '<i class="fab fa-markdown"></i>', 'sql': '<i class="fas fa-database"></i>', 'log': '<i class="fas fa-file-alt"></i>', 'conf': '<i class="fas fa-cog"></i>', 'ini': '<i class="fas fa-cog"></i>'
            };

            return icons[ext] || '<i class="fas fa-file"></i>';
        }

        // Format file size
        function formatSize(bytes) {
            // Convert to number and handle edge cases
            bytes = parseInt(bytes) || 0;
            if (bytes === 0) return '0 B';
            
            const k = 1024;
            const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            
            // Safeguard against invalid values
            if (i < 0 || isNaN(i)) return '0 B';
            
            return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
        }

        // Toggle selection
        function toggleSelection(checkbox, event) {
            event.stopPropagation();
            const item = checkbox.closest('.file-grid-item, .file-list-item');
            const name = item.dataset.name;
            const type = item.dataset.type;

            if (checkbox.checked) {
                item.classList.add('selected');
                if (!selectedItems.find(i => i.name === name)) {
                    // Store fullPath and parentPath for nested items
                    const itemData = {name, type};
                    if (item.dataset.fullPath) {
                        itemData.fullPath = item.dataset.fullPath;
                    }
                    if (item.dataset.parentPath) {
                        itemData.parentPath = item.dataset.parentPath;
                    }
                    selectedItems.push(itemData);
                }
            } else {
                item.classList.remove('selected');
                selectedItems = selectedItems.filter(i => i.name !== name);
            }

            updateStatus();
            updateSelectAllCheckbox();
        }

        // Select all
        function selectAll() {
            selectedItems = [];
            const checkboxes = document.querySelectorAll('.file-checkbox, .file-grid-checkbox');
            checkboxes.forEach(cb => {
                cb.checked = true;
                const item = cb.closest('.file-grid-item, .file-list-item');
                item.classList.add('selected');

                // Build item data with fullPath if available
                const itemData = {
                    name: item.dataset.name,
                    type: item.dataset.type
                };
                if (item.dataset.fullPath) {
                    itemData.fullPath = item.dataset.fullPath;
                }
                if (item.dataset.parentPath) {
                    itemData.parentPath = item.dataset.parentPath;
                }
                selectedItems.push(itemData);
            });

            updateStatus();
            updateSelectAllCheckbox();
        }

        // Clear all selections
        function clearSelection() {
            const checkboxes = document.querySelectorAll('.file-checkbox, .file-grid-checkbox');
            checkboxes.forEach(cb => {
                cb.checked = false;
                const item = cb.closest('.file-grid-item, .file-list-item');
                if (item) item.classList.remove('selected');
            });

            selectedItems = [];
            updateStatus();
            updateSelectAllCheckbox();
        }

        // Update select all checkbox state based on current selection
        function updateSelectAllCheckbox() {
            const selectAllCheckbox = document.getElementById('selectAllCheckbox');
            if (!selectAllCheckbox) return;

            const totalFiles = allFiles.length;
            const selectedCount = selectedItems.length;

            if (selectedCount === 0) {
                selectAllCheckbox.checked = false;
                selectAllCheckbox.indeterminate = false;
            } else if (selectedCount === totalFiles) {
                selectAllCheckbox.checked = true;
                selectAllCheckbox.indeterminate = false;
            } else {
                selectAllCheckbox.checked = false;
                selectAllCheckbox.indeterminate = true;
            }
        }

        // Drag to select functionality
        let isDragging = false;
        let dragStartX = 0;
        let dragStartY = 0;
        let dragRect = null;
        let initialSelection = [];

        function initDragSelection() {
            const fileList = document.getElementById('fileList');
            if (!fileList) return;

            fileList.addEventListener('mousedown', (e) => {
                // Only handle left mouse button (not right-click for context menu)
                if (e.button !== 0) {
                    return;
                }

                // Don't start drag if clicking on checkbox, button, or link
                if (e.target.type === 'checkbox' ||
                    e.target.classList.contains('file-checkbox') ||
                    e.target.classList.contains('file-grid-checkbox') ||
                    e.target.tagName === 'BUTTON' ||
                    e.target.tagName === 'A' ||
                    e.target.closest('button') ||
                    e.target.closest('a') ||
                    e.target.classList.contains('breadcrumb-link') ||
                    e.target.classList.contains('action-btn')) {
                    return;
                }

                // Don't start drag selection if clicking on a SELECTED item (for drag-and-drop move)
                const clickedItem = e.target.closest('.file-grid-item, .file-list-item');
                if (clickedItem && clickedItem.classList.contains('selected')) {
                    return;
                }

                // Only start drag selection on file list background or file items
                if (e.target.classList.contains('file-grid') ||
                    e.target.classList.contains('file-list-table') ||
                    e.target.classList.contains('file-grid-item') ||
                    e.target.classList.contains('file-list-item') ||
                    e.target.classList.contains('file-grid-icon') ||
                    e.target.classList.contains('file-grid-name') ||
                    e.target.classList.contains('file-grid-size') ||
                    e.target.closest('.file-grid-item') ||
                    e.target.closest('.file-list-item')) {

                    isDragging = true;
                    dragStartX = e.clientX;
                    dragStartY = e.clientY;

                    // Clear previous selection when starting new drag
                    const checkboxes = document.querySelectorAll('.file-checkbox, .file-grid-checkbox');
                    checkboxes.forEach(cb => {
                        cb.checked = false;
                        const item = cb.closest('.file-grid-item, .file-list-item');
                        if (item) item.classList.remove('selected');
                    });
                    selectedItems = [];
                    initialSelection = [];
                    updateStatus();

                    // Create drag rectangle
                    dragRect = document.createElement('div');
                    dragRect.className = 'drag-selection-rect';
                    document.body.appendChild(dragRect);
                    document.body.classList.add('drag-selecting');

                    e.preventDefault();
                }
            });

            document.addEventListener('mousemove', (e) => {
                if (!isDragging || !dragRect) return;

                const currentX = e.clientX;
                const currentY = e.clientY;

                // Calculate rectangle bounds
                const left = Math.min(dragStartX, currentX);
                const top = Math.min(dragStartY, currentY);
                const width = Math.abs(currentX - dragStartX);
                const height = Math.abs(currentY - dragStartY);

                // Update drag rectangle
                dragRect.style.left = left + 'px';
                dragRect.style.top = top + 'px';
                dragRect.style.width = width + 'px';
                dragRect.style.height = height + 'px';

                // Check for intersections with file items
                const rectBounds = {
                    left: left,
                    top: top,
                    right: left + width,
                    bottom: top + height
                };

                updateDragSelection(rectBounds);
            });

            document.addEventListener('mouseup', (e) => {
                if (!isDragging) return;

                isDragging = false;

                // Remove drag rectangle
                if (dragRect) {
                    dragRect.remove();
                    dragRect = null;
                }

                document.body.classList.remove('drag-selecting');
            });
        }

        function updateDragSelection(rectBounds) {
            const items = document.querySelectorAll('.file-grid-item, .file-list-item');
            const newSelection = [];

            items.forEach(item => {
                const name = item.dataset.name;
                const type = item.dataset.type;

                // Skip parent directory
                if (name === '..') return;

                const itemBounds = item.getBoundingClientRect();
                const intersects = !(
                    itemBounds.right < rectBounds.left ||
                    itemBounds.left > rectBounds.right ||
                    itemBounds.bottom < rectBounds.top ||
                    itemBounds.top > rectBounds.bottom
                );

                const checkbox = item.querySelector('.file-checkbox, .file-grid-checkbox');

                if (intersects) {
                    // Item is within selection rectangle
                    if (!item.classList.contains('selected')) {
                        item.classList.add('selected');
                        if (checkbox) checkbox.checked = true;
                    }
                    if (!newSelection.find(i => i.name === name)) {
                        // Store fullPath and parentPath for nested items
                        const itemData = {name, type};
                        if (item.dataset.fullPath) {
                            itemData.fullPath = item.dataset.fullPath;
                        }
                        if (item.dataset.parentPath) {
                            itemData.parentPath = item.dataset.parentPath;
                        }
                        newSelection.push(itemData);
                    }
                } else {
                    // Item is outside selection rectangle - deselect it
                    item.classList.remove('selected');
                    if (checkbox) checkbox.checked = false;
                }
            });

            selectedItems = newSelection;
            updateStatus();
            updateSelectAllCheckbox();
        }

        // Drag and drop to move files
        let draggedItems = [];
        let autoScrollInterval = null;

        function initDragAndDrop() {
            // This will be called when file list is refreshed
            // Handled in displayFiles functions
        }

        // Auto-scroll when dragging near file list edges
        function initAutoScroll() {
            let isScrolling = false;
            let scrollAmount = 0;
            let animationFrameId = null;

            function autoScroll() {
                if (!isScrolling || scrollAmount === 0) {
                    animationFrameId = requestAnimationFrame(autoScroll);
                    return;
                }

                const fileListContainer = document.querySelector('.file-list-container');
                if (fileListContainer) {
                    fileListContainer.scrollBy(0, scrollAmount);
                }

                // Continue the animation loop
                animationFrameId = requestAnimationFrame(autoScroll);
            }

            document.addEventListener('dragover', (e) => {
                if (draggedItems.length === 0) return;

                const fileListContainer = document.querySelector('.file-list-container');
                if (!fileListContainer) return;

                // Get file list container bounds
                const containerRect = fileListContainer.getBoundingClientRect();
                const mouseY = e.clientY;

                // Calculate position relative to container
                const relativeY = mouseY - containerRect.top;
                const containerHeight = containerRect.height;

                const scrollThreshold = 100; // pixels from edge
                const maxScrollSpeed = 3; // Gentle scrolling speed

                let newScrollAmount = 0;

                // Check if near top of container
                if (relativeY < scrollThreshold && relativeY > 0) {
                    // Near top - scroll up
                    // Use square root for gentler acceleration curve
                    const proximity = (scrollThreshold - relativeY) / scrollThreshold;
                    const easedProximity = Math.sqrt(proximity);
                    newScrollAmount = -easedProximity * maxScrollSpeed;
                }
                // Check if near bottom of container
                else if (relativeY > containerHeight - scrollThreshold && relativeY < containerHeight) {
                    // Near bottom - scroll down
                    // Use square root for gentler acceleration curve
                    const proximity = (relativeY - (containerHeight - scrollThreshold)) / scrollThreshold;
                    const easedProximity = Math.sqrt(proximity);
                    newScrollAmount = easedProximity * maxScrollSpeed;
                }

                scrollAmount = newScrollAmount;

                // Start animation loop if not already running
                if (!isScrolling && scrollAmount !== 0) {
                    isScrolling = true;
                    autoScroll();
                } else if (isScrolling && scrollAmount === 0) {
                    isScrolling = false;
                }
            });

            function stopScrolling() {
                isScrolling = false;
                scrollAmount = 0;
                if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                    animationFrameId = null;
                }
            }

            document.addEventListener('dragend', stopScrolling);
            document.addEventListener('drop', stopScrolling);
        }

        // Initialize auto-scroll on page load
        initAutoScroll();

        // Setup drop zones for breadcrumb items (each folder in path)
        function initBreadcrumbDropZones() {
            const breadcrumbItems = document.querySelectorAll('.breadcrumb-drop-target');

            breadcrumbItems.forEach(item => {
                const targetPath = item.dataset.path;

                // Handle dragover on individual breadcrumb item
                item.addEventListener('dragover', (e) => {
                    if (draggedItems.length === 0) return;

                    e.preventDefault();
                    e.stopPropagation();
                    e.dataTransfer.dropEffect = 'move';
                    item.classList.add('breadcrumb-item-drop-active');
                });

                item.addEventListener('dragleave', (e) => {
                    // Only remove highlight if leaving this item completely
                    if (!item.contains(e.relatedTarget)) {
                        item.classList.remove('breadcrumb-item-drop-active');
                    }
                });

                // Handle drop on individual breadcrumb item
                item.addEventListener('drop', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    item.classList.remove('breadcrumb-item-drop-active');

                    if (draggedItems.length === 0) return;

                    // Move to the folder represented by this breadcrumb item
                    window.currentMoveItems = draggedItems.slice();
                    performDragDropMove(targetPath);
                });
            });
        }

        // Clean up breadcrumb highlights on drag end
        document.addEventListener('dragend', () => {
            document.querySelectorAll('.breadcrumb-item-drop-active').forEach(item => {
                item.classList.remove('breadcrumb-item-drop-active');
            });
        });

        function setupDragEvents(itemElement, itemName, itemType) {
            // Parent directory should be a drop target but not draggable
            if (itemName === '..') {
                // Make ".." a drop target for moving to parent directory
                itemElement.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    e.dataTransfer.dropEffect = 'move';
                    itemElement.classList.add('drag-over');
                });

                itemElement.addEventListener('dragleave', (e) => {
                    if (!itemElement.contains(e.relatedTarget)) {
                        itemElement.classList.remove('drag-over');
                    }
                });

                itemElement.addEventListener('drop', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    itemElement.classList.remove('drag-over');

                    // Calculate parent directory path
                    const parentDir = currentDir.substring(0, currentDir.lastIndexOf('/')) || '/';

                    // Store the items to move
                    window.currentMoveItems = draggedItems.slice();

                    // Perform the move operation to parent directory
                    performDragDropMove(parentDir);
                });

                return; // Don't make it draggable
            }

            // Make item draggable
            itemElement.setAttribute('draggable', 'true');

            itemElement.addEventListener('dragstart', (e) => {
                // Check if this item is selected
                const isSelected = selectedItems.some(item => item.name === itemName);

                if (isSelected && selectedItems.length > 0) {
                    // Drag all selected items - need to get fullPath from each DOM element
                    draggedItems = selectedItems.map(item => {
                        // Find the DOM element for this item to get its fullPath
                        const itemEl = document.querySelector(`.file-list-item[data-name="${item.name}"], .file-grid-item[data-name="${item.name}"]`);
                        const itemFullPath = itemEl ? itemEl.dataset.fullPath : null;
                        return {
                            name: item.name,
                            type: item.type,
                            fullPath: itemFullPath
                        };
                    });
                } else {
                    // Drag only this item - get fullPath from dataset if available
                    const itemFullPath = itemElement.dataset.fullPath || null;
                    draggedItems = [{name: itemName, type: itemType, fullPath: itemFullPath}];
                }

                // Add dragging class to all selected items
                if (draggedItems.length > 1) {
                    document.querySelectorAll('.file-grid-item.selected, .file-list-item.selected').forEach(el => {
                        el.classList.add('dragging');
                    });
                } else {
                    itemElement.classList.add('dragging');
                }

                // Create custom drag image for multiple items
                if (draggedItems.length > 1) {
                    const dragImage = document.createElement('div');
                    dragImage.style.position = 'absolute';
                    dragImage.style.top = '-1000px';
                    dragImage.style.padding = '10px 15px';
                    dragImage.style.background = 'var(--accent-color)';
                    dragImage.style.color = 'white';
                    dragImage.style.borderRadius = '8px';
                    dragImage.style.fontWeight = 'bold';
                    dragImage.style.fontSize = '14px';
                    dragImage.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
                    dragImage.innerHTML = `<i class="fas fa-copy"></i> ${draggedItems.length} items`;
                    document.body.appendChild(dragImage);

                    // Set the custom drag image
                    e.dataTransfer.setDragImage(dragImage, 50, 25);

                    // Remove the drag image after a short delay
                    setTimeout(() => {
                        document.body.removeChild(dragImage);
                    }, 0);
                }

                // Set drag data
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('text/plain', JSON.stringify(draggedItems));
            });

            itemElement.addEventListener('dragend', (e) => {
                // Remove dragging class from all items
                document.querySelectorAll('.dragging').forEach(el => {
                    el.classList.remove('dragging');
                });
                // Remove drag-over class from all items
                document.querySelectorAll('.drag-over').forEach(el => {
                    el.classList.remove('drag-over');
                });
            });

            // Only folders can be drop targets
            if (itemType === 'dir') {
                itemElement.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    // Don't allow dropping on itself
                    if (draggedItems.some(item => item.name === itemName)) {
                        e.dataTransfer.dropEffect = 'none';
                        return;
                    }

                    e.dataTransfer.dropEffect = 'move';
                    itemElement.classList.add('drag-over');
                });

                itemElement.addEventListener('dragleave', (e) => {
                    // Only remove if leaving the element completely
                    if (!itemElement.contains(e.relatedTarget)) {
                        itemElement.classList.remove('drag-over');
                    }
                });

                itemElement.addEventListener('drop', (e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    itemElement.classList.remove('drag-over');

                    // Don't allow dropping on itself
                    if (draggedItems.some(item => item.name === itemName)) {
                        return;
                    }

                    // Get the destination path - use fullPath from dataset if available
                    const destinationPath = itemElement.dataset.fullPath || (currentDir + '/' + itemName);

                    // Store the items to move
                    window.currentMoveItems = draggedItems.slice();

                    // Perform the move operation directly
                    performDragDropMove(destinationPath);
                });
            }
        }

        function performDragDropMove(destinationPath) {
            if (!window.currentMoveItems || window.currentMoveItems.length === 0) {
                return;
            }

            const itemCount = window.currentMoveItems.length;

            // Extract folder name from destination path
            const folderName = destinationPath.split('/').filter(p => p).pop() || '/';

            if (!confirm(`Move ${itemCount} item(s) to folder "${folderName}"`)) {
                return;
            }

            showLoader();

            // Move items sequentially
            let successCount = 0;
            let errorCount = 0;
            let currentIndex = 0;

            function moveNextItem() {
                if (currentIndex >= window.currentMoveItems.length) {
                    // All items processed
                    hideLoader();

                    if (successCount > 0) {
                        selectedItems = []; // Clear selection
                        refreshList();

                        if (errorCount > 0) {
                            alert('Moved ' + successCount + ' items successfully, ' + errorCount + ' failed');
                        }
                    } else {
                        alert('Failed to move any items');
                    }
                    return;
                }

                const item = window.currentMoveItems[currentIndex];
                let oldPath = item.fullPath || (currentDir + '/' + item.name);
                let newPath = destinationPath + '/' + item.name;

                // Remove leading slashes for FTP paths
                oldPath = oldPath.replace(/^\/+/, '');
                newPath = newPath.replace(/^\/+/, '');

                fetch(window.location.href, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: 'action=move&oldPath=' + encodeURIComponent(oldPath) +
                          '&newPath=' + encodeURIComponent(newPath) +
                          '&type=' + item.type
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        successCount++;
                    } else {
                        errorCount++;
                    }
                    currentIndex++;
                    moveNextItem();
                })
                .catch(error => {
                    errorCount++;
                    currentIndex++;
                    moveNextItem();
                });
            }

            moveNextItem();
        }

        // Helper function to get the correct path for an item
        function getItemPath(nameOrElement) {
            // If it's a string (name), use current directory
            if (typeof nameOrElement === 'string') {
                return currentDir + '/' + nameOrElement;
            }

            // If it's an element or event, find the list item and check for full path
            let element = nameOrElement;
            if (nameOrElement.target) {
                element = nameOrElement.target;
            }

            const listItem = element.closest('.file-list-item');
            if (listItem && listItem.dataset.fullPath) {
                return listItem.dataset.fullPath;
            }

            // Fallback to current directory + name
            if (listItem && listItem.dataset.name) {
                return currentDir + '/' + listItem.dataset.name;
            }

            return null;
        }

        // Wrapper functions for tree operations
        function editFileFromTree(element) {
            const listItem = element.closest('.file-list-item');
            // Robust path reconstruction
            let path;
            if (listItem.dataset.fullPath) {
                path = listItem.dataset.fullPath;
            } else if (listItem.dataset.parentPath) {
                path = listItem.dataset.parentPath + '/' + listItem.dataset.name;
            } else {
                path = currentDir === '/' ? '/' + listItem.dataset.name : currentDir + '/' + listItem.dataset.name;
            }
            const name = listItem.dataset.name;
            editFile(name, path);
        }

        function downloadFileFromTree(element, event) {
            const listItem = element.closest('.file-list-item');
            // Robust path reconstruction
            let path;
            if (listItem.dataset.fullPath) {
                path = listItem.dataset.fullPath;
            } else if (listItem.dataset.parentPath) {
                path = listItem.dataset.parentPath + '/' + listItem.dataset.name;
            } else {
                path = currentDir === '/' ? '/' + listItem.dataset.name : currentDir + '/' + listItem.dataset.name;
            }
            const name = listItem.dataset.name;
            downloadFile(name, event, path);
        }

        function downloadFolderFromTree(element, event) {
            const listItem = element.closest('.file-list-item');

            // Determine the full path - try multiple strategies
            let path;
            if (listItem.dataset.fullPath) {
                // Best case: fullPath is already set
                path = listItem.dataset.fullPath;
            } else if (listItem.dataset.parentPath) {
                // Nested item: reconstruct from parentPath + name
                path = listItem.dataset.parentPath + '/' + listItem.dataset.name;
            } else {
                // Fallback: construct from currentDir
                path = currentDir === '/' ? '/' + listItem.dataset.name : currentDir + '/' + listItem.dataset.name;
            }

            const name = listItem.dataset.name;
            downloadFolder(name, event, path);
        }

        function renameItemFromTree(element, event) {
            const listItem = element.closest('.file-list-item');
            // Robust path reconstruction
            let path;
            if (listItem.dataset.fullPath) {
                path = listItem.dataset.fullPath;
            } else if (listItem.dataset.parentPath) {
                path = listItem.dataset.parentPath + '/' + listItem.dataset.name;
            } else {
                path = currentDir === '/' ? '/' + listItem.dataset.name : currentDir + '/' + listItem.dataset.name;
            }
            const name = listItem.dataset.name;
            renameItem(name, event, path);
        }

        function copyItemFromTree(element, event) {
            const listItem = element.closest('.file-list-item');
            // Robust path reconstruction
            let path;
            if (listItem.dataset.fullPath) {
                path = listItem.dataset.fullPath;
            } else if (listItem.dataset.parentPath) {
                path = listItem.dataset.parentPath + '/' + listItem.dataset.name;
            } else {
                path = currentDir === '/' ? '/' + listItem.dataset.name : currentDir + '/' + listItem.dataset.name;
            }
            const name = listItem.dataset.name;
            const type = listItem.dataset.type;
            copyItem(name, type, event, path);
        }

        function moveItemFromTree(element, event) {
            const listItem = element.closest('.file-list-item');
            // Robust path reconstruction
            let path;
            if (listItem.dataset.fullPath) {
                path = listItem.dataset.fullPath;
            } else if (listItem.dataset.parentPath) {
                path = listItem.dataset.parentPath + '/' + listItem.dataset.name;
            } else {
                path = currentDir === '/' ? '/' + listItem.dataset.name : currentDir + '/' + listItem.dataset.name;
            }
            const name = listItem.dataset.name;
            const type = listItem.dataset.type;
            moveItem(name, type, event, path);
        }

        function deleteItemFromTree(element, event) {
            const listItem = element.closest('.file-list-item');
            // Robust path reconstruction
            let path;
            if (listItem.dataset.fullPath) {
                path = listItem.dataset.fullPath;
            } else if (listItem.dataset.parentPath) {
                path = listItem.dataset.parentPath + '/' + listItem.dataset.name;
            } else {
                path = currentDir === '/' ? '/' + listItem.dataset.name : currentDir + '/' + listItem.dataset.name;
            }
            const name = listItem.dataset.name;
            const type = listItem.dataset.type;
            deleteItem(name, type, event, path);
        }

        // Navigate to directory
        function navigateTo(dir) {
            currentDir = dir.replace(/\/+/g, '/').replace(/\/$/, '') || '/';
            selectedItems = [];

            // Update URL with current directory for bookmarking
            updateURL();

            refreshList();
        }

        // Folder expansion state tracking
        const expandedFolders = new Map(); // Map<fullPath, boolean>

        // Toggle folder expansion
        async function toggleFolderExpansion(folderElement, folderName, expandIcon) {
            // Use fullPath from dataset if available (for nested items), otherwise construct from currentDir
            const folderPath = folderElement.dataset.fullPath || (currentDir === '/' ? '/' + folderName : currentDir + '/' + folderName);

            const isExpanded = expandedFolders.get(folderPath);

            if (isExpanded) {
                // Collapse folder
                collapseFolderContents(folderElement, folderPath);
                expandIcon.classList.remove('expanded');
                expandedFolders.set(folderPath, false);
            } else {
                // Expand folder
                expandIcon.classList.add('loading');
                await loadFolderContents(folderElement, folderName, folderPath);
                expandIcon.classList.remove('loading');
                expandIcon.classList.add('expanded');
                expandedFolders.set(folderPath, true);
            }
        }

        // Load and display folder contents
        async function loadFolderContents(parentElement, folderName, folderPath) {
            try {
                const response = await fetch(window.location.href, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: 'action=list&dir=' + encodeURIComponent(folderPath)
                });

                const data = await response.json();

                if (data.success && data.items) {
                    // Get the parent's depth
                    const parentDepth = parseInt(parentElement.dataset.depth || '0');
                    const childDepth = parentDepth + 1;

                    // Filter out parent directory
                    const items = data.items.filter(item => item.name !== '..');

                    // Insert child items after the parent
                    items.forEach((item, index) => {
                        const itemFullPath = folderPath === '/' ? '/' + item.name : folderPath + '/' + item.name;
                        const childItem = createListItem(item, itemFullPath);
                        childItem.dataset.depth = childDepth;
                        childItem.dataset.parentPath = folderPath;
                        childItem.classList.add('nested');
                        childItem.style.setProperty('--indent-level', childDepth);

                        // Insert after parent (and any previous siblings)
                        const nextSibling = parentElement.nextElementSibling;
                        if (nextSibling) {
                            parentElement.parentNode.insertBefore(childItem, nextSibling);
                        } else {
                            parentElement.parentNode.appendChild(childItem);
                        }

                        // Move to next position for next item
                        if (index < items.length - 1) {
                            parentElement = childItem;
                        }
                    });
                }
            } catch (error) {
                console.error('Error loading folder contents:', error);
                alert('Failed to load folder contents');
            }
        }

        // Collapse folder and remove its contents
        function collapseFolderContents(folderElement, folderPath) {
            let nextElement = folderElement.nextElementSibling;

            while (nextElement) {
                const nextPath = nextElement.dataset.parentPath;

                // Check if this element is a child of the folder being collapsed
                if (nextPath && nextPath.startsWith(folderPath)) {
                    const toRemove = nextElement;
                    nextElement = nextElement.nextElementSibling;

                    // Also mark nested folders as collapsed
                    const nestedPath = nextPath + '/' + toRemove.dataset.name;
                    expandedFolders.set(nestedPath, false);

                    toRemove.remove();
                } else {
                    break;
                }
            }
        }

        // Update URL with current directory
        function updateURL() {
            const url = new URL(window.location);
            if (currentDir === '/') {
                url.searchParams.delete('home');
            } else {
                url.searchParams.set('home', currentDir);
            }
            window.history.replaceState({}, '', url);
        }

        // Update breadcrumb
        function updateBreadcrumb() {
            const breadcrumb = document.getElementById('breadcrumb');
            const parts = currentDir.split('/').filter(p => p);

            let html = '<div class="breadcrumb-item breadcrumb-drop-target" data-path="/"><span class="breadcrumb-link" onclick="navigateTo(\'/\')">Home</span></div>';

            let path = '';
            parts.forEach((part, index) => {
                path += '/' + part;
                html += '<span class="breadcrumb-separator">/</span>';
                html += '<div class="breadcrumb-item breadcrumb-drop-target" data-path="' + path + '"><span class="breadcrumb-link" onclick="navigateTo(\'' + path + '\')">' + part + '</span></div>';
            });

            breadcrumb.innerHTML = html;
            document.getElementById('currentPath').textContent = currentDir;

            // Re-initialize breadcrumb drop zones after updating
            initBreadcrumbDropZones();
        }

        // Update status
        function updateStatus() {
            document.getElementById('itemCount').textContent = allFiles.length + ' items';
            document.getElementById('selectedCount').textContent = selectedItems.length + ' selected';
        }

        // Search files
        function searchFiles() {
            const query = document.getElementById('searchInput').value.toLowerCase();
            
            if (!query) {
                displayFiles(allFiles);
                return;
            }
            
            const filtered = allFiles.filter(item => 
                item.name.toLowerCase().includes(query)
            );
            
            displayFiles(filtered);
        }

        // Set view mode
        function setView(mode) {
            viewMode = mode;
            
            document.getElementById('gridViewBtn').classList.toggle('active', mode === 'grid');
            document.getElementById('listViewBtn').classList.toggle('active', mode === 'list');
            
            // Save view mode preference to cookie
            setCookie('filemanager_viewmode', mode);
            
            displayFiles(allFiles);
            
            // Show feedback for manual changes
            if (document.readyState === 'complete') {
                showPreferenceMessage('View mode: ' + mode);
            }
        }

        // Toggle sidebar
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebarOverlay');
            const isOpen = sidebar.classList.contains('open');
            
            if (isOpen) {
                closeSidebar();
            } else {
                openSidebar();
            }
        }

        // Open sidebar
        function openSidebar() {
            document.getElementById('sidebar').classList.add('open');
            
            // Show overlay on mobile
            if (window.innerWidth <= 1024) {
                document.getElementById('sidebarOverlay').classList.add('show');
            }
        }

        // Close sidebar
        function closeSidebar() {
            document.getElementById('sidebar').classList.remove('open');
            document.getElementById('sidebarOverlay').classList.remove('show');
        }
        
        // Close sidebar on mobile after navigation
        function closeSidebarOnMobile() {
            if (window.innerWidth <= 1024) {
                closeSidebar();
            }
        }

        // Mobile actions dropdown
        function toggleMobileActions() {
            const dropdown = document.getElementById('mobileActionsDropdown');
            const moreBtn = document.querySelector('.mobile-more-btn');
            
            if (!dropdown) {
                alert('Error: Dropdown element not found');
                return;
            }
            
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            } else {
                // Get the More button position
                const btnRect = moreBtn.getBoundingClientRect();
                
                // Show and position the dropdown
                dropdown.style.display = 'block';
                dropdown.style.position = 'fixed';
                dropdown.style.top = (btnRect.bottom + 5) + 'px';
                dropdown.style.right = '10px';
                dropdown.style.zIndex = '9999';
                dropdown.style.minWidth = '150px';
            }
        }

        function hideMobileActions() {
            document.getElementById('mobileActionsDropdown').style.display = 'none';
        }

        // Hide mobile dropdown and close sidebar when clicking outside
        document.addEventListener('click', function(event) {
            // Handle mobile actions dropdown
            const dropdown = document.getElementById('mobileActionsDropdown');
            const moreBtn = document.querySelector('.mobile-more-btn');
            
            if (dropdown && moreBtn && !dropdown.contains(event.target) && !moreBtn.contains(event.target)) {
                hideMobileActions();
            }
            
            // Handle sidebar closing on mobile
            const sidebar = document.getElementById('sidebar');
            const menuToggle = document.querySelector('.mobile-menu-toggle');
            
            // Only on mobile screens and if sidebar is open
            if (window.innerWidth <= 1024 && sidebar && sidebar.classList.contains('open')) {
                // Close if click is outside sidebar and not on the menu toggle button
                if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
                    closeSidebar();
                }
            }
        });

        // Toggle theme
        function toggleTheme() {
            const currentTheme = document.body.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            // Update both html and body elements
            document.documentElement.setAttribute('data-theme', newTheme);
            document.body.setAttribute('data-theme', newTheme);

            // Save theme preference to cookie
            setCookie('filemanager_theme', newTheme);

            // Update CodeMirror theme if editor is open
            updateCodeMirrorTheme();

            showPreferenceMessage('Theme: ' + newTheme + ' mode');
        }

        // Show/hide loader
        function showLoader() {
            document.getElementById('loadingOverlay').style.display = 'flex';
        }

        function hideLoader() {
            document.getElementById('loadingOverlay').style.display = 'none';
        }

        // Modal functions
        function showModal(id) {
            document.getElementById(id).classList.add('show');
            
            // Mobile keyboard handling for editor
            if (id === 'editorModal' && window.innerWidth <= 768) {
                // Prevent body scrolling on mobile
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
                
                // Add class to handle viewport changes
                document.body.classList.add('editor-open-mobile');
            }
        }

        function closeModal(id) {
            document.getElementById(id).classList.remove('show');
            
            // Restore body scrolling on mobile
            if (id === 'editorModal' && window.innerWidth <= 768) {
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.width = '';
                document.body.classList.remove('editor-open-mobile');
            }
        }

        // Target directory for create/upload operations
        let targetOperationDir = null;

        function showUploadModal(targetDir = null) {
            targetOperationDir = targetDir || currentDir;
            // Reset to files mode
            setUploadType('files');
            showModal('uploadModal');
        }

        function showCreateDirModal(targetDir = null) {
            targetOperationDir = targetDir || currentDir;
            showModal('createDirModal');
        }

        function showCreateFileModal(targetDir = null) {
            targetOperationDir = targetDir || currentDir;
            showModal('createFileModal');
        }

        // Upload functionality
        let currentUploadType = 'files';

        function setUploadType(type) {
            currentUploadType = type;
            
            // Reset button states
            document.getElementById('filesTypeBtn').classList.remove('btn-primary');
            document.getElementById('folderTypeBtn').classList.remove('btn-primary');
            document.getElementById('zipExtractTypeBtn').classList.remove('btn-primary');
            
            document.getElementById('filesTypeBtn').classList.add('btn-light');
            document.getElementById('folderTypeBtn').classList.add('btn-light');
            document.getElementById('zipExtractTypeBtn').classList.add('btn-light');
            
            // Hide all sections
            document.getElementById('filesUploadSection').style.display = 'none';
            document.getElementById('folderUploadSection').style.display = 'none';
            document.getElementById('zipExtractUploadSection').style.display = 'none';
            
            // Show selected section and update button
            const uploadBtn = document.getElementById('uploadBtn');
            
            if (type === 'files') {
                document.getElementById('filesUploadSection').style.display = 'block';
                document.getElementById('filesTypeBtn').classList.remove('btn-light');
                document.getElementById('filesTypeBtn').classList.add('btn-primary');
                uploadBtn.style.display = 'inline-block';
                uploadBtn.textContent = 'Upload Files';
            } else if (type === 'folder') {
                document.getElementById('folderUploadSection').style.display = 'block';
                document.getElementById('folderTypeBtn').classList.remove('btn-light');
                document.getElementById('folderTypeBtn').classList.add('btn-primary');
                uploadBtn.style.display = 'none'; // Hide upload button - folders upload automatically
            } else if (type === 'zipExtract') {
                document.getElementById('zipExtractUploadSection').style.display = 'block';
                document.getElementById('zipExtractTypeBtn').classList.remove('btn-light');
                document.getElementById('zipExtractTypeBtn').classList.add('btn-primary');
                uploadBtn.style.display = 'inline-block';
                uploadBtn.textContent = 'Upload & Extract';
            }
        }

        function showUploadUnzipModal() {
            targetOperationDir = currentDir;
            // Set to zip extract mode
            setUploadType('zipExtract');
            showModal('uploadModal');
        }

        function performUpload() {
            if (currentUploadType === 'files') {
                uploadFiles();
            } else if (currentUploadType === 'folder') {
                uploadFolder();
            } else if (currentUploadType === 'zipExtract') {
                uploadAndExtract();
            }
        }

        async function uploadFiles() {
            const fileInput = document.getElementById('fileInput');
            const files = fileInput.files;

            if (!files.length) {
                alert('Please select files to upload');
                return;
            }

            showUploadProgress();
            let completedFiles = 0;
            const totalFiles = files.length;

            // Calculate total size for overall progress
            let totalSize = 0;
            let uploadedSize = 0;
            Array.from(files).forEach(file => totalSize += file.size);

            // Upload files sequentially for better progress tracking
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const fileSize = file.size;

                // Create a promise for each file upload
                await new Promise((resolve, reject) => {
                    const basePath = targetOperationDir || currentDir;

                    const formData = new FormData();
                    formData.append('action', 'upload');
                    formData.append('file', file);
                    formData.append('basePath', basePath);

                    const xhr = new XMLHttpRequest();

                    // Track upload progress for this file
                    xhr.upload.addEventListener('progress', (e) => {
                        if (e.lengthComputable) {
                            const fileProgress = e.loaded;
                            const totalProgress = uploadedSize + fileProgress;
                            const percentComplete = Math.round((totalProgress / totalSize) * 100);
                            const currentMB = ((uploadedSize + fileProgress) / 1048576).toFixed(2);
                            const totalMB = (totalSize / 1048576).toFixed(2);
                            updateUploadProgress(percentComplete, 100,
                                `File ${i + 1}/${totalFiles}: ${file.name} (${currentMB}MB / ${totalMB}MB)`);
                        }
                    });

                    // Handle load event
                    xhr.addEventListener('load', () => {
                        if (xhr.status === 200) {
                            try {
                                const data = JSON.parse(xhr.responseText);
                                uploadedSize += fileSize;
                                completedFiles++;
                                resolve(data);
                            } catch (e) {
                                console.error('Parse error for file:', file.name, e);
                                reject(e);
                            }
                        } else {
                            reject(new Error(`Upload failed for ${file.name}: ${xhr.status}`));
                        }
                    });

                    // Handle error event
                    xhr.addEventListener('error', () => {
                        reject(new Error(`Network error uploading ${file.name}`));
                    });

                    xhr.open('POST', window.location.href);
                    xhr.send(formData);
                });
            }

            // All uploads complete
            updateUploadProgress(100, 100, `All ${totalFiles} files uploaded successfully!`);
            setTimeout(() => {
                closeModal('uploadModal');
                refreshList();
                resetUploadModal();
            }, 500);
        }

        async function uploadFolder() {
            const folderInput = document.getElementById('folderInput');
            const files = folderInput.files;

            if (!files.length) {
                alert('Please select a folder to upload');
                return;
            }

            showUploadProgress();

            // First, extract and create unique directory structure
            const directories = new Set();
            const filesList = Array.from(files);

            // Extract all unique directory paths
            filesList.forEach(file => {
                const relativePath = file.webkitRelativePath || file.name;
                const dirPath = relativePath.substring(0, relativePath.lastIndexOf('/'));

                if (dirPath) {
                    // Add all parent directories too
                    const parts = dirPath.split('/');
                    let currentPath = '';
                    for (const part of parts) {
                        currentPath = currentPath ? currentPath + '/' + part : part;
                        directories.add(currentPath);
                    }
                }
            });

            // Convert to sorted array (ensures parent dirs are created first)
            const sortedDirs = Array.from(directories).sort();

            // Create all directories first
            if (sortedDirs.length > 0) {
                updateUploadProgress(0, sortedDirs.length + files.length, 'Creating folder structure...');

                for (let i = 0; i < sortedDirs.length; i++) {
                    const dir = sortedDirs[i];
                    const formData = new FormData();
                    formData.append('action', 'createDirForUpload');
                    formData.append('basePath', targetOperationDir || currentDir);
                    formData.append('dirPath', dir);

                    try {
                        await fetch(window.location.href, {
                            method: 'POST',
                            body: formData
                        });
                        updateUploadProgress(i + 1, sortedDirs.length + files.length, 'Created: ' + dir);
                    } catch (error) {
                        console.error('Error creating directory:', dir, error);
                    }
                }
            }

            // Now upload all files (without creating directories)
            let completed = sortedDirs.length;
            const total = sortedDirs.length + files.length;

            const uploadPromises = filesList.map(file => {
                return requestLimiter.execute(async () => {
                    const formData = new FormData();
                    const basePath = targetOperationDir || currentDir;

                    formData.append('action', 'uploadFileOnly');
                    formData.append('file', file);
                    formData.append('basePath', basePath);

                    // Send relative path for proper placement
                    const relativePath = file.webkitRelativePath || file.name;
                    formData.append('relativePath', relativePath);

                    const response = await fetch(window.location.href, {
                        method: 'POST',
                        body: formData
                    });
                    const data = await response.json();

                    completed++;
                    updateUploadProgress(completed, total, 'Uploading: ' + relativePath);

                    return data;
                });
            });

            try {
                await Promise.all(uploadPromises);
                setTimeout(() => {
                    closeModal('uploadModal');
                    refreshList();
                    resetUploadModal();
                }, 500);
            } catch (error) {
                console.error('Upload error:', error);
                alert('Some uploads failed. Please try again.');
            }
        }

        function uploadAndExtract() {
            const zipInput = document.getElementById('zipInput');
            const extractPath = document.getElementById('extractPath').value;

            if (!zipInput.files.length) {
                alert('Please select an archive file to upload');
                return;
            }

            const file = zipInput.files[0];
            const fileSize = file.size;
            const fileName = file.name;

            const basePath = targetOperationDir || currentDir;

            showUploadProgress();
            updateUploadProgress(0, 100, 'Starting upload of ' + fileName + '...');

            const formData = new FormData();
            formData.append('action', 'uploadAndUnzip');
            formData.append('file', file);
            formData.append('basePath', basePath);
            formData.append('extractPath', extractPath);

            // Use XMLHttpRequest for progress tracking
            const xhr = new XMLHttpRequest();

            // Track upload progress
            xhr.upload.addEventListener('progress', (e) => {
                if (e.lengthComputable) {
                    const percentComplete = Math.round((e.loaded / e.total) * 100);
                    const mbUploaded = (e.loaded / 1048576).toFixed(2);
                    const mbTotal = (e.total / 1048576).toFixed(2);
                    updateUploadProgress(percentComplete, 100, `Uploading: ${mbUploaded}MB / ${mbTotal}MB`);
                }
            });

            // Handle load event (upload complete)
            xhr.addEventListener('load', () => {
                if (xhr.status === 200) {
                    // Upload complete, now processing
                    updateUploadProgress(100, 100, 'Upload complete. Extracting archive...');

                    try {
                        const responseText = xhr.responseText;

                        const data = JSON.parse(responseText);

                        updateUploadProgress(100, 100, data.success ? 'Extraction complete!' : 'Processing complete');

                        setTimeout(() => {
                            if (data.success) {
                                closeModal('uploadModal');
                                refreshList();
                                resetUploadModal();
                            } else {
                                alert('Upload and extraction failed: ' + (data.error || 'Unknown error'));
                                hideUploadProgress();
                            }
                        }, 500);
                    } catch (e) {
                        console.error('JSON parse error:', e);
                        console.error('Response was not valid JSON:', xhr.responseText);
                        alert('Invalid response from server. Check console for details.');
                        hideUploadProgress();
                    }
                } else {
                    console.error('Upload failed with status:', xhr.status);
                    alert('Upload failed. Server returned status: ' + xhr.status);
                    hideUploadProgress();
                }
            });

            // Handle error event
            xhr.addEventListener('error', () => {
                console.error('Upload error');
                alert('Error during upload. Please check your connection and try again.');
                hideUploadProgress();
            });

            // Handle abort event
            xhr.addEventListener('abort', () => {
                hideUploadProgress();
            });

            // Send the request
            xhr.open('POST', window.location.href);
            xhr.send(formData);
        }

        function showUploadProgress() {
            document.getElementById('uploadProgress').style.display = 'block';
        }

        function hideUploadProgress() {
            document.getElementById('uploadProgress').style.display = 'none';
        }

        function updateUploadProgress(completed, total, text) {
            const percent = Math.round((completed / total) * 100);
            document.getElementById('uploadProgressText').textContent = text;
            document.getElementById('uploadProgressPercent').textContent = percent + '%';
            document.getElementById('uploadProgressBar').style.width = percent + '%';
        }

        function resetUploadModal() {
            document.getElementById('fileInput').value = '';
            document.getElementById('folderInput').value = '';
            document.getElementById('zipInput').value = '';
            document.getElementById('extractPath').value = '';
            hideUploadProgress();
        }

        // Create directory
        function createDirectory() {
            const dirName = document.getElementById('dirName').value;

            if (!dirName) {
                alert('Please enter a folder name');
                return;
            }

            // Use targetOperationDir if set, otherwise use currentDir
            const baseDir = targetOperationDir || currentDir;
            const fullPath = baseDir === '/' ? '/' + dirName : baseDir + '/' + dirName;

            fetch(window.location.href, {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: 'action=createDir&name=' + encodeURIComponent(fullPath)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    closeModal('createDirModal');
                    document.getElementById('dirName').value = '';
                    refreshList();
                } else {
                    alert('Failed to create folder');
                }
            });
        }
        
        // Create file
        function createFile() {
            const fileName = document.getElementById('fileName').value;

            if (!fileName) {
                alert('Please enter a file name');
                return;
            }

            // Validate file name (basic check)
            if (fileName.includes('/') || fileName.includes('\\')) {
                alert('File name cannot contain slashes');
                return;
            }

            // Use targetOperationDir if set, otherwise use currentDir
            const baseDir = targetOperationDir || currentDir;
            const fullPath = baseDir === '/' ? '/' + fileName : baseDir + '/' + fileName;

            fetch(window.location.href, {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: 'action=createFile&name=' + encodeURIComponent(fullPath)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    closeModal('createFileModal');
                    document.getElementById('fileName').value = '';
                    // Refresh the file list first, then open for editing
                    refreshList();
                    // Small delay to ensure file is available before editing
                    setTimeout(() => {
                        editFile(fileName);
                    }, 500);
                } else {
                    alert('Failed to create file: ' + (data.error || 'Unknown error'));
                }
            })
            .catch(error => {
                alert('Error creating file');
            });
        }

        // Delete selected items
        async function deleteSelected() {
            if (!selectedItems.length) {
                alert('No items selected');
                return;
            }

            if (!confirm('Delete ' + selectedItems.length + ' item(s)?')) {
                return;
            }

            // Use Promise.all with rate limiting for concurrent deletes
            const deletePromises = selectedItems.map(item => {
                return requestLimiter.execute(async () => {
                    // Use fullPath if available (for nested items), otherwise construct from currentDir
                    let itemPath = item.fullPath || (currentDir === '/' ? '/' + item.name : currentDir + '/' + item.name);
                    // Remove leading slashes for FTP
                    itemPath = itemPath.replace(/^\/+/, '');


                    const response = await fetch(window.location.href, {
                        method: 'POST',
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                        body: 'action=delete&path=' + encodeURIComponent(itemPath) + '&type=' + item.type
                    });
                    return response.json();
                });
            });

            try {
                await Promise.all(deletePromises);
                selectedItems = [];
                refreshList();
            } catch (error) {
                console.error('Delete error:', error);
                alert('Some deletions failed. Please try again.');
                refreshList(); // Refresh anyway to see what was actually deleted
            }
        }

        // Delete single item
        async function deleteItem(name, type, event, fullPath = null) {
            event.stopPropagation();

            // Check if this item is part of a selection
            const isPartOfSelection = selectedItems.some(item => item.name === name);
            if (isPartOfSelection && selectedItems.length > 1) {
                // Use deleteSelected instead
                deleteSelected();
                return;
            }

            if (!confirm('Delete ' + name + '?')) {
                return;
            }

            let itemPath = fullPath || (currentDir + '/' + name);
            itemPath = itemPath.replace(/^\/+/, ''); // Remove leading slash for FTP

            try {
                await requestLimiter.execute(async () => {
                    const response = await fetch(window.location.href, {
                        method: 'POST',
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                        body: 'action=delete&path=' + encodeURIComponent(itemPath) + '&type=' + type
                    });
                    const data = await response.json();

                    if (data.success) {
                        refreshList();
                    } else {
                        alert('Failed to delete ' + name);
                    }

                    return data;
                });
            } catch (error) {
                console.error('Delete error:', error);
                alert('Failed to delete ' + name);
            }
        }
        
        // Move single item
        function moveItem(name, type, event, fullPath = null) {
            event.stopPropagation();

            // Check if this item is part of a selection
            const isPartOfSelection = selectedItems.some(item => item.name === name);
            if (isPartOfSelection && selectedItems.length > 1) {
                // Use moveSelected instead
                moveSelected();
                return;
            }

            const itemPath = fullPath || (currentDir + '/' + name);

            // Set up move modal for single item
            document.getElementById('currentMoveDir').textContent = itemPath.substring(0, itemPath.lastIndexOf('/')) || '/';
            document.getElementById('moveItems').innerHTML = '<div class="move-item">' + (type === 'dir' ? '<i class="fas fa-folder"></i>' : '<i class="fas fa-file"></i>') + ' ' + name + '</div>';
            document.getElementById('movePath').value = '';

            // Store the items to move with full path
            window.currentMoveItems = [{name: name, type: type, fullPath: itemPath}];

            // Initialize move modal
            initializeMoveModal();

            showModal('moveModal');
        }
        
        function moveSelected() {
            if (!selectedItems.length) {
                alert('No items selected');
                return;
            }
            
            // Set up move modal for selected items
            document.getElementById('currentMoveDir').textContent = currentDir;
            
            let itemsHtml = '';
            selectedItems.forEach(item => {
                itemsHtml += '<div class="move-item">' + (item.type === 'dir' ? '<i class="fas fa-folder"></i>' : '<i class="fas fa-file"></i>') + ' ' + item.name + '</div>';
            });
            document.getElementById('moveItems').innerHTML = itemsHtml;
            document.getElementById('movePath').value = '';
            
            // Store the items to move
            window.currentMoveItems = selectedItems.slice(); // Copy array
            
            // Initialize move modal
            initializeMoveModal();
            
            showModal('moveModal');
        }
        
        
        // Initialize move modal
        function initializeMoveModal() {
            // Reset to folder picker mode
            toggleFolderPicker();
            
            // Initialize current move directory - start from current directory
            window.currentMoveDir = currentDir || '/';
            window.selectedMovePath = currentDir || '/';
            
            // Load folders from current directory
            loadMoveFolders(currentDir || '/');
            
            // Update selected path display
            document.getElementById('selectedMovePath').textContent = currentDir || '/';
        }
        
        // Toggle between folder picker and manual path
        function toggleFolderPicker() {
            document.getElementById('folderPickerSection').style.display = 'block';
            document.getElementById('manualPathSection').style.display = 'none';
            document.getElementById('folderPickerToggle').classList.add('btn-primary');
            document.getElementById('folderPickerToggle').classList.remove('btn-light');
            document.getElementById('manualPathToggle').classList.add('btn-light');
            document.getElementById('manualPathToggle').classList.remove('btn-primary');
        }
        
        function toggleManualPath() {
            document.getElementById('folderPickerSection').style.display = 'none';
            document.getElementById('manualPathSection').style.display = 'block';
            document.getElementById('manualPathToggle').classList.add('btn-primary');
            document.getElementById('manualPathToggle').classList.remove('btn-light');
            document.getElementById('folderPickerToggle').classList.add('btn-light');
            document.getElementById('folderPickerToggle').classList.remove('btn-primary');
        }
        
        // Load folders for move destination
        async function loadMoveFolders(path) {
            const folderPicker = document.getElementById('folderPicker');
            folderPicker.innerHTML = '<div class="folder-picker-loading">\ud83d\udd04 Loading folders...</div>';
            
            try {
                const response = await fetch(window.location.href, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: 'action=list&dir=' + encodeURIComponent(path)
                });
                
                const data = await response.json();
                
                if (data.success) {
                    const folders = data.items.filter(item => item.type === 'dir' && item.name !== '..');
                    
                    let html = '';
                    
                    // Add parent directory option if not at root
                    if (path !== '/') {
                        const parentPath = path.split('/').slice(0, -1).join('/') || '/';
                        html += '<div class="folder-picker-item" data-action="navigate" data-path="' + parentPath + '">';
                        html += '\ud83d\udd19 .. (Parent Directory)';
                        html += '</div>';
                    }
                    
                    // Add current directory selection option
                    html += '<div class="folder-picker-item current-folder" data-action="select" data-path="' + path + '">';
                    html += '\u2705 \ud83d\udcc1 Move files here (' + (path === '/' ? 'Root' : path.split('/').pop()) + ')';
                    html += '</div>';
                    
                    // Add subdirectories
                    folders.forEach(folder => {
                        const folderPath = path === '/' ? '/' + folder.name : path + '/' + folder.name;
                        html += '<div class="folder-picker-item" data-action="navigate" data-path="' + folderPath + '">';
                        html += '\ud83d\udcc1 ' + folder.name;
                        html += '</div>';
                    });
                    
                    if (folders.length === 0 && path === '/') {
                        html += '<div class="folder-picker-loading">No folders found</div>';
                    }
                    
                    folderPicker.innerHTML = html;
                    
                    // Add click event listeners to folder picker items
                    folderPicker.querySelectorAll('.folder-picker-item').forEach(item => {
                        item.addEventListener('click', function(event) {
                            const action = this.getAttribute('data-action');
                            const itemPath = this.getAttribute('data-path');
                            
                            
                            if (action === 'select') {
                                selectMoveDestination(itemPath, this);
                            } else if (action === 'navigate') {
                                navigateMoveTo(itemPath);
                            }
                        });
                    });
                } else {
                    folderPicker.innerHTML = '<div class="folder-picker-loading">\u274c Error loading folders</div>';
                }
            } catch (error) {
                folderPicker.innerHTML = '<div class="folder-picker-loading">\u274c Error loading folders</div>';
            }
        }
        
        // Navigate to a folder in move picker
        function navigateMoveTo(path) {
            window.currentMoveDir = path;
            // Also auto-select this folder as destination
            window.selectedMovePath = path;
            document.getElementById('selectedMovePath').textContent = path;
            
            loadMoveFolders(path);
            updateMoveBreadcrumb(path);
        }
        
        // Select move destination
        function selectMoveDestination(path, clickedElement) {
            window.selectedMovePath = path;
            document.getElementById('selectedMovePath').textContent = path;
            
            // Highlight selected folder
            document.querySelectorAll('.folder-picker-item').forEach(item => {
                item.classList.remove('selected');
            });
            
            // Highlight the clicked item
            if (clickedElement) {
                clickedElement.classList.add('selected');
            }
        }
        
        // Update breadcrumb for move navigation
        function updateMoveBreadcrumb(path) {
            const breadcrumb = document.getElementById('moveBreadcrumb');
            const parts = path.split('/').filter(p => p);
            
            let html = '<span class="breadcrumb-link" data-path="/">';
            html += '\ud83c\udfe0 Root</span>';
            
            let currentPath = '';
            parts.forEach(part => {
                currentPath += '/' + part;
                html += ' / <span class="breadcrumb-link" data-path="' + currentPath + '">';
                html += part + '</span>';
            });
            
            breadcrumb.innerHTML = html;
            
            // Add click event listeners to breadcrumb links
            breadcrumb.querySelectorAll('.breadcrumb-link').forEach(link => {
                link.addEventListener('click', function() {
                    const linkPath = this.getAttribute('data-path');
                    navigateMoveTo(linkPath);
                });
            });
        }
        
        // Perform the move operation
        function performMove() {
            let destinationPath;
            
            // Check which mode is active
            if (document.getElementById('folderPickerSection').style.display !== 'none') {
                // Folder picker mode
                destinationPath = window.selectedMovePath || '/';
            } else {
                // Manual path mode
                destinationPath = document.getElementById('movePath').value.trim();
                if (!destinationPath) {
                    alert('Please enter a destination path');
                    return;
                }
            }
            
            if (!window.currentMoveItems || window.currentMoveItems.length === 0) {
                alert('No items to move');
                return;
            }
            
            showLoader();
            
            // Move items sequentially
            let successCount = 0;
            let errorCount = 0;
            let currentIndex = 0;
            
            function moveNextItem() {
                if (currentIndex >= window.currentMoveItems.length) {
                    // All items processed
                    hideLoader();
                    
                    if (successCount > 0) {
                        closeModal('moveModal');
                        selectedItems = []; // Clear selection
                        refreshList();
                        
                        // Only show alert if there were errors
                        if (errorCount > 0) {
                            alert('Moved ' + successCount + ' items successfully, ' + errorCount + ' failed');
                        }
                        // No alert for successful moves - just close modal and refresh
                    } else {
                        alert('Failed to move any items');
                    }
                    return;
                }
                
                const item = window.currentMoveItems[currentIndex];
                let oldPath = item.fullPath || (currentDir + '/' + item.name);
                let newPath = destinationPath + '/' + item.name;

                // Remove leading slashes for FTP paths
                oldPath = oldPath.replace(/^\/+/, '');
                newPath = newPath.replace(/^\/+/, '');

                fetch(window.location.href, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: 'action=move&oldPath=' + encodeURIComponent(oldPath) +
                          '&newPath=' + encodeURIComponent(newPath) +
                          '&type=' + item.type
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        successCount++;
                    } else {
                        errorCount++;
                        console.error('Failed to move', item.name, ':', data.error);
                    }
                    currentIndex++;
                    moveNextItem(); // Process next item
                })
                .catch(error => {
                    errorCount++;
                    console.error('Move error for', item.name, ':', error);
                    currentIndex++;
                    moveNextItem(); // Process next item
                });
            }
            
            // Start moving items
            moveNextItem();
        }

        // Copy functions
        function copyItem(name, type, event, fullPath = null) {
            event.stopPropagation();

            // Check if this item is part of a selection
            const isPartOfSelection = selectedItems.some(item => item.name === name);
            if (isPartOfSelection && selectedItems.length > 1) {
                // Use copySelected instead
                copySelected();
                return;
            }

            const itemPath = fullPath || (currentDir + '/' + name);

            // Set up copy modal for single item
            document.getElementById('currentCopyDir').textContent = itemPath.substring(0, itemPath.lastIndexOf('/')) || '/';
            document.getElementById('copyItems').innerHTML = '<div class="move-item">' + (type === 'dir' ? '<i class="fas fa-folder"></i>' : '<i class="fas fa-file"></i>') + ' ' + name + '</div>';
            document.getElementById('copyPath').value = '';

            // Store the items to copy with full path
            window.currentCopyItems = [{name: name, type: type, fullPath: itemPath}];

            // Show filename input for single file, hide for directories
            if (type === 'file') {
                document.getElementById('copyFilenameSection').style.display = 'block';
                document.getElementById('copyOriginalFilename').textContent = name;
                document.getElementById('copyNewFilename').value = name;
            } else {
                document.getElementById('copyFilenameSection').style.display = 'none';
                document.getElementById('copyNewFilename').value = '';
            }

            // Initialize copy modal
            initializeCopyModal();

            showModal('copyModal');
        }

        function copySelected() {
            if (!selectedItems.length) {
                alert('No items selected');
                return;
            }

            // Set up copy modal for selected items
            document.getElementById('currentCopyDir').textContent = currentDir;

            let itemsHtml = '';
            selectedItems.forEach(item => {
                itemsHtml += '<div class="move-item">' + (item.type === 'dir' ? '<i class="fas fa-folder"></i>' : '<i class="fas fa-file"></i>') + ' ' + item.name + '</div>';
            });
            document.getElementById('copyItems').innerHTML = itemsHtml;
            document.getElementById('copyPath').value = '';

            // Store the items to copy
            window.currentCopyItems = selectedItems.slice(); // Copy array

            // Show filename input only for single file
            if (selectedItems.length === 1 && selectedItems[0].type === 'file') {
                document.getElementById('copyFilenameSection').style.display = 'block';
                document.getElementById('copyOriginalFilename').textContent = selectedItems[0].name;
                document.getElementById('copyNewFilename').value = selectedItems[0].name;
            } else {
                document.getElementById('copyFilenameSection').style.display = 'none';
                document.getElementById('copyNewFilename').value = '';
            }

            // Initialize copy modal
            initializeCopyModal();

            showModal('copyModal');
        }

        // Initialize copy modal
        function initializeCopyModal() {
            // Reset to folder picker mode
            toggleCopyFolderPicker();

            // Initialize current copy directory - start from current directory
            window.currentCopyDir = currentDir || '/';
            window.selectedCopyPath = currentDir || '/';

            // Load folders from current directory
            loadCopyFolders(currentDir || '/');

            // Update selected path display
            document.getElementById('selectedCopyPath').textContent = currentDir || '/';
        }

        // Toggle between folder picker and manual path for copy
        function toggleCopyFolderPicker() {
            document.getElementById('copyFolderPickerSection').style.display = 'block';
            document.getElementById('copyManualPathSection').style.display = 'none';
            document.getElementById('copyFolderPickerToggle').classList.add('btn-primary');
            document.getElementById('copyFolderPickerToggle').classList.remove('btn-light');
            document.getElementById('copyManualPathToggle').classList.add('btn-light');
            document.getElementById('copyManualPathToggle').classList.remove('btn-primary');
        }

        function toggleCopyManualPath() {
            document.getElementById('copyFolderPickerSection').style.display = 'none';
            document.getElementById('copyManualPathSection').style.display = 'block';
            document.getElementById('copyManualPathToggle').classList.add('btn-primary');
            document.getElementById('copyManualPathToggle').classList.remove('btn-light');
            document.getElementById('copyFolderPickerToggle').classList.add('btn-light');
            document.getElementById('copyFolderPickerToggle').classList.remove('btn-primary');
        }

        // Load folders for copy modal
        function loadCopyFolders(path) {
            const folderPicker = document.getElementById('copyFolderPicker');
            folderPicker.innerHTML = '<div class="folder-picker-loading"><i class="fas fa-spinner fa-spin"></i> Loading folders...</div>';

            fetch(window.location.href, {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: 'action=list&dir=' + encodeURIComponent(path)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    let html = '';

                    // Get parent path
                    const pathParts = path.split('/').filter(p => p);
                    const parentPath = pathParts.length > 0 ? '/' + pathParts.slice(0, -1).join('/') : '/';

                    // Add parent directory option if not at root
                    if (path !== '/' && path !== '') {
                        html += '<div class="folder-picker-item" data-action="navigate" data-path="' + parentPath + '">';
                        html += '<i class="fas fa-level-up-alt"></i> <strong>..</strong> (Parent Directory)';
                        html += '</div>';
                    }

                    // Add current directory selection
                    html += '<div class="folder-picker-item current-folder" data-action="select" data-path="' + path + '">';
                    html += '<i class="fas fa-folder"></i> <strong>.</strong> (Current Directory)';
                    html += '</div>';

                    // Add subfolders
                    data.items.forEach(item => {
                        if (item.type === 'dir') {
                            const folderPath = path + '/' + item.name;
                            html += '<div class="folder-picker-item" data-action="navigate" data-path="' + folderPath + '">';
                            html += '<i class="fas fa-folder"></i> ' + item.name;
                            html += '</div>';
                        }
                    });

                    folderPicker.innerHTML = html;

                    // Add click handlers
                    document.querySelectorAll('#copyFolderPicker .folder-picker-item').forEach(item => {
                        item.addEventListener('click', function() {
                            const action = this.getAttribute('data-action');
                            const itemPath = this.getAttribute('data-path');

                            // Remove previous selection
                            document.querySelectorAll('#copyFolderPicker .folder-picker-item').forEach(i => i.classList.remove('selected'));

                            if (action === 'select') {
                                this.classList.add('selected');
                                window.selectedCopyPath = itemPath;
                                document.getElementById('selectedCopyPath').textContent = itemPath;
                            } else if (action === 'navigate') {
                                navigateCopyTo(itemPath);
                            }
                        });
                    });

                    // Update breadcrumb
                    updateCopyBreadcrumb(path);
                } else {
                    folderPicker.innerHTML = '<div class="folder-picker-error">Failed to load folders</div>';
                }
            })
            .catch(error => {
                console.error('Error loading copy folders:', error);
                folderPicker.innerHTML = '<div class="folder-picker-error">Error loading folders</div>';
            });
        }

        function navigateCopyTo(path) {
            window.currentCopyDir = path;
            window.selectedCopyPath = path;
            document.getElementById('selectedCopyPath').textContent = path;
            loadCopyFolders(path);
        }

        function updateCopyBreadcrumb(path) {
            const breadcrumb = document.getElementById('copyBreadcrumb');
            let html = '<span class="breadcrumb-link" onclick="navigateCopyTo(\'/\')"><i class="fas fa-home"></i> Root</span>';

            if (path !== '/' && path !== '') {
                const parts = path.split('/').filter(p => p);
                let currentPath = '';

                parts.forEach(part => {
                    currentPath += '/' + part;
                    html += ' <span class="breadcrumb-separator">/</span> ';
                    html += '<span class="breadcrumb-link" onclick="navigateCopyTo(\'' + currentPath + '\')">' + part + '</span>';
                });
            }

            breadcrumb.innerHTML = html;
        }

        function performCopy() {
            let destinationPath;

            // Check which mode is active
            if (document.getElementById('copyFolderPickerSection').style.display !== 'none') {
                // Folder picker mode
                destinationPath = window.selectedCopyPath || '/';
            } else {
                // Manual path mode
                destinationPath = document.getElementById('copyPath').value.trim();
                if (!destinationPath) {
                    alert('Please enter a destination path');
                    return;
                }
            }

            if (!window.currentCopyItems || window.currentCopyItems.length === 0) {
                alert('No items to copy');
                return;
            }

            showLoader();

            // Copy items sequentially
            let successCount = 0;
            let errorCount = 0;
            let currentIndex = 0;

            function copyNextItem() {
                if (currentIndex >= window.currentCopyItems.length) {
                    // All items processed
                    hideLoader();

                    if (successCount > 0) {
                        closeModal('copyModal');
                        selectedItems = []; // Clear selection
                        refreshList();

                        // Only show alert if there were errors
                        if (errorCount > 0) {
                            alert('Copied ' + successCount + ' items successfully, ' + errorCount + ' failed');
                        }
                        // No alert for successful copies - just close modal and refresh
                    } else {
                        alert('Failed to copy any items');
                    }
                    return;
                }

                const item = window.currentCopyItems[currentIndex];
                let oldPath = item.fullPath || (currentDir + '/' + item.name);

                // Use custom filename if provided for single file copy
                let targetFilename = item.name;
                if (window.currentCopyItems.length === 1 && item.type === 'file') {
                    const customFilename = document.getElementById('copyNewFilename').value.trim();
                    if (customFilename && customFilename !== '') {
                        targetFilename = customFilename;
                    }
                }
                let newPath = destinationPath + '/' + targetFilename;

                // Remove leading slashes for FTP paths
                oldPath = oldPath.replace(/^\/+/, '');
                newPath = newPath.replace(/^\/+/, '');

                fetch(window.location.href, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: 'action=copy&oldPath=' + encodeURIComponent(oldPath) +
                          '&newPath=' + encodeURIComponent(newPath) +
                          '&type=' + item.type
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        successCount++;
                    } else {
                        errorCount++;
                    }
                    currentIndex++;
                    copyNextItem(); // Process next item
                })
                .catch(error => {
                    errorCount++;
                    currentIndex++;
                    copyNextItem(); // Process next item
                });
            }

            // Start copying items
            copyNextItem();
        }

        // Download file
        function downloadFile(name, event, fullPath = null) {
            event.stopPropagation();

            // Check if this item is part of a selection
            const isPartOfSelection = selectedItems.some(item => item.name === name);
            if (isPartOfSelection && selectedItems.length > 1) {
                // Use downloadSelected instead
                downloadSelected();
                return;
            }

            const form = document.createElement('form');
            form.method = 'POST';
            form.action = window.location.href;

            const actionInput = document.createElement('input');
            actionInput.type = 'hidden';
            actionInput.name = 'action';
            actionInput.value = 'download';

            const fileInput = document.createElement('input');
            fileInput.type = 'hidden';
            fileInput.name = 'file';
            const filePath = fullPath || (currentDir + '/' + name);
            fileInput.value = filePath.replace(/^\/+/, ''); // Remove leading slash for FTP

            form.appendChild(actionInput);
            form.appendChild(fileInput);
            document.body.appendChild(form);
            form.submit();
            document.body.removeChild(form);
        }

        // Download selected
        function downloadSelected() {
            if (!selectedItems.length) {
                alert('No items selected');
                return;
            }
            
            if (selectedItems.length === 1 && selectedItems[0].type === 'file') {
                // Single file - use direct download
                downloadFile(selectedItems[0].name, new Event('click'));
            } else {
                // Multiple items or folder - create zip
                downloadAsZip(selectedItems);
            }
        }

        // Download items as zip
        function downloadAsZip(items) {
            // If single item, use its name as default, otherwise use 'download.zip'
            let defaultName = 'download.zip';
            if (items.length === 1) {
                defaultName = items[0].name + '.zip';
            }

            const zipName = prompt('Enter zip filename:', defaultName);
            if (!zipName) return;

            showLoader();

            // Determine the base path from the selected items
            let basePath = currentDir;

            // If items have fullPath, extract the directory from the first item
            if (items.length > 0 && items[0].fullPath) {
                const fullPath = items[0].fullPath;
                // Extract directory by removing the filename
                basePath = fullPath.substring(0, fullPath.lastIndexOf('/')) || '/';
            } else if (items.length > 0 && items[0].parentPath) {
                // Fallback to parentPath if fullPath not available
                basePath = items[0].parentPath;
            }

            // Remove leading slashes for FTP compatibility
            basePath = basePath.replace(/^\/+/, '');

            const form = document.createElement('form');
            form.method = 'POST';
            form.action = window.location.href;

            const actionInput = document.createElement('input');
            actionInput.type = 'hidden';
            actionInput.name = 'action';
            actionInput.value = 'downloadZip';

            const itemsInput = document.createElement('input');
            itemsInput.type = 'hidden';
            itemsInput.name = 'items';
            itemsInput.value = JSON.stringify(items);

            const basePathInput = document.createElement('input');
            basePathInput.type = 'hidden';
            basePathInput.name = 'basePath';
            basePathInput.value = basePath;
            
            const zipNameInput = document.createElement('input');
            zipNameInput.type = 'hidden';
            zipNameInput.name = 'zipName';
            zipNameInput.value = zipName;
            
            form.appendChild(actionInput);
            form.appendChild(itemsInput);
            form.appendChild(basePathInput);
            form.appendChild(zipNameInput);
            
            document.body.appendChild(form);
            form.submit();
            document.body.removeChild(form);
            
            // Hide loader after a short delay (download should start)
            setTimeout(() => hideLoader(), 2000);
        }

        // Download folder as zip
        function downloadFolder(folderName, event, fullPath = null) {
            event.stopPropagation();

            // Check if this item is part of a selection
            const isPartOfSelection = selectedItems.some(item => item.name === folderName);
            if (isPartOfSelection && selectedItems.length > 1) {
                // Use downloadSelected instead
                downloadSelected();
                return;
            }

            const itemPath = fullPath || (currentDir + '/' + folderName);
            let basePath = itemPath.substring(0, itemPath.lastIndexOf('/')) || '/';
            basePath = basePath.replace(/^\/+/, ''); // Remove leading slash for FTP

            const items = [{name: folderName, type: 'dir'}];
            const defaultName = folderName + '.zip';
            const zipName = prompt('Enter zip filename:', defaultName);

            if (!zipName) return;

            showLoader();

            const form = document.createElement('form');
            form.method = 'POST';
            form.action = window.location.href;

            const actionInput = document.createElement('input');
            actionInput.type = 'hidden';
            actionInput.name = 'action';
            actionInput.value = 'downloadZip';

            const itemsInput = document.createElement('input');
            itemsInput.type = 'hidden';
            itemsInput.name = 'items';
            itemsInput.value = JSON.stringify(items);

            const basePathInput = document.createElement('input');
            basePathInput.type = 'hidden';
            basePathInput.name = 'basePath';
            basePathInput.value = basePath;

            const zipNameInput = document.createElement('input');
            zipNameInput.type = 'hidden';
            zipNameInput.name = 'zipName';
            zipNameInput.value = zipName;

            form.appendChild(actionInput);
            form.appendChild(itemsInput);
            form.appendChild(basePathInput);
            form.appendChild(zipNameInput);

            document.body.appendChild(form);
            form.submit();
            document.body.removeChild(form);

            // Hide loader after a short delay (download should start)
            setTimeout(() => hideLoader(), 2000);
        }

        // Rename item
        function renameItem(name, event, fullPath = null) {
            event.stopPropagation();

            let itemPath = fullPath || (currentDir === '/' ? '/' + name : currentDir + '/' + name);
            const itemDir = itemPath.substring(0, itemPath.lastIndexOf('/')) || '/';

            const newName = prompt('New name:', name);
            if (!newName || newName === name) {
                return;
            }

            let newPath = itemDir === '/' ? '/' + newName : itemDir + '/' + newName;

            // Remove leading slashes for FTP paths
            itemPath = itemPath.replace(/^\/+/, '');
            newPath = newPath.replace(/^\/+/, '');

            fetch(window.location.href, {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: 'action=rename&oldPath=' + encodeURIComponent(itemPath) +
                      '&newPath=' + encodeURIComponent(newPath)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    refreshList();
                } else {
                    alert('Failed to rename');
                }
            });
        }

        // Edit file functionality
        let currentEditPath = '';
        let isWysiwygMode = false;
        let showingPreview = false;

        function editSelected() {
            if (selectedItems.length !== 1 || selectedItems[0].type !== 'file') {
                alert('Please select a single file to edit');
                return;
            }
            
            editFile(selectedItems[0].name);
        }

        function editFile(filename, fullPath = null) {
            if (!isFileEditable(filename)) {
                alert('This file type cannot be edited. Only text-based files can be edited.');
                return;
            }

            // Use provided path or construct from current directory
            let normalizedPath = fullPath || (currentDir === '/' ? '/' + filename : currentDir + '/' + filename);

            // Remove leading slash for FTP paths (FTP expects relative paths)
            normalizedPath = normalizedPath.replace(/^\/+/, '');

            currentEditPath = normalizedPath;

            document.getElementById('editFileName').textContent = filename;
            
            // Get file type for display
            const fileType = getFileTypeDisplay(filename);
            document.getElementById('fileType').textContent = '(' + fileType + ')';
            
            // Show WYSIWYG button for HTML files
            const ext = getFileExtension(filename).toLowerCase();
            const wysiwygBtn = document.getElementById('wysiwygBtn');
            const previewBtn = document.getElementById('previewBtn');
            
            if (ext === 'html' || ext === 'htm') {
                wysiwygBtn.style.display = 'block';
                previewBtn.style.display = 'block';
            } else {
                wysiwygBtn.style.display = 'none';
                previewBtn.style.display = 'none';
            }
            
            // Reset preview state when opening a new file
            showingPreview = false;
            const previewContainer = document.getElementById('previewContainer');
            if (previewContainer) {
                previewContainer.style.display = 'none';
            }

            // Reset WYSIWYG state when opening a new file
            isWysiwygMode = false;

            // Destroy TinyMCE instance if it exists
            if (tinyMCEInstance) {
                tinymce.remove('#wysiwygEditor');
                tinyMCEInstance = null;
            }

            const wysiwygContainer = document.getElementById('wysiwygContainer');
            const editorContainer = document.getElementById('editorContainer');
            if (wysiwygContainer) {
                wysiwygContainer.style.display = 'none';
            }
            if (editorContainer) {
                editorContainer.style.display = 'block';
            }

            // Reset WYSIWYG button text
            const wysiwygBtnElement = document.getElementById('wysiwygBtn');
            if (wysiwygBtnElement) {
                wysiwygBtnElement.innerHTML = '<i class="fas fa-eye"></i> WYSIWYG';
            }

            showLoader();

            const requestBody = 'action=edit&path=' + encodeURIComponent(currentEditPath);

            fetch(window.location.href, {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: requestBody
            })
            .then(response => {
                return response.text();
            })
            .then(responseText => {
                try {
                    const data = JSON.parse(responseText);
                    hideLoader();
                    if (data.success) {
                        // Handle base64 encoded content if necessary
                        let content = data.content;
                        if (data.encoded === true) {
                            content = atob(content); // Decode base64
                        }
                        // Initialize CodeMirror if not already done
                        if (!codeMirrorEditor) {
                            initializeCodeMirror();
                        }
                        
                        // Set content and mode
                        codeMirrorEditor.setValue(content);
                        setCodeMirrorMode(filename);
                        // Enable linting for supported file types
                        enableLintingForFileType(filename);
                        
                        showModal('editorModal');
                        
                        // Refresh CodeMirror after modal is shown
                        setTimeout(() => {
                            codeMirrorEditor.refresh();
                            codeMirrorEditor.focus();
                        }, 100);
                        
                        updateEditorStatus();
                    } else {
                        console.error('Edit failed:', data.error);
                        alert('Failed to load file: ' + (data.error || 'Unknown error'));
                    }
                } catch (e) {
                    console.error('JSON parse error:', e);
                    console.error('Response was not valid JSON:', responseText);
                    alert('Invalid response from server. Check console for details.');
                    hideLoader();
                }
            })
            .catch(error => {
                console.error('Edit request error:', error);
                hideLoader();
                alert('Error loading file');
            });
        }

        function isFileEditable(filename) {
            const editableExtensions = [
                'php', 'html', 'htm', 'css', 'js', 'txt', 'md', 'json', 'xml', 'sql', 
                'py', 'java', 'c', 'cpp', 'h', 'cs', 'rb', 'go', 'ts', 'tsx', 'jsx', 
                'vue', 'yaml', 'yml', 'ini', 'conf', 'sh', 'bash', 'log', 'csv'
            ];
            
            // Special cases for files without extensions or starting with dot
            const specialFiles = [
                '.htaccess', '.htpasswd', '.gitignore', '.env', '.config',
                'dockerfile', 'makefile', 'readme', 'license', 'changelog'
            ];
            
            const ext = getFileExtension(filename).toLowerCase();
            const lowerFilename = filename.toLowerCase();
            
            // Check if it's a special file (like .htaccess)
            if (specialFiles.some(special => lowerFilename === special || lowerFilename.endsWith(special))) {
                return true;
            }
            
            // Check by extension
            return editableExtensions.includes(ext);
        }

        function getFileTypeDisplay(filename) {
            const ext = getFileExtension(filename).toLowerCase();
            const lowerFilename = filename.toLowerCase();
            
            // Special files
            if (lowerFilename === '.htaccess') return 'Apache Config';
            if (lowerFilename === '.htpasswd') return 'Apache Password';
            if (lowerFilename === '.gitignore') return 'Git Ignore';
            if (lowerFilename === '.env') return 'Environment';
            if (lowerFilename === 'dockerfile') return 'Docker';
            if (lowerFilename === 'makefile') return 'Makefile';
            if (lowerFilename === 'readme' || lowerFilename.startsWith('readme.')) return 'README';
            if (lowerFilename === 'license' || lowerFilename.startsWith('license.')) return 'License';
            if (lowerFilename === 'changelog' || lowerFilename.startsWith('changelog.')) return 'Changelog';
            
            // File extensions
            const types = {
                'php': 'PHP', 'html': 'HTML', 'htm': 'HTML', 'css': 'CSS', 'js': 'JavaScript',
                'ts': 'TypeScript', 'tsx': 'TypeScript JSX', 'jsx': 'JavaScript JSX',
                'py': 'Python', 'java': 'Java', 'c': 'C', 'cpp': 'C++', 'h': 'C Header',
                'cs': 'C#', 'rb': 'Ruby', 'go': 'Go', 'vue': 'Vue.js',
                'json': 'JSON', 'xml': 'XML', 'yaml': 'YAML', 'yml': 'YAML',
                'sql': 'SQL', 'md': 'Markdown', 'txt': 'Text', 'log': 'Log',
                'ini': 'INI Config', 'conf': 'Config', 'config': 'Config',
                'sh': 'Shell Script', 'bash': 'Bash Script', 'csv': 'CSV'
            };
            
            return types[ext] || ext.toUpperCase() || 'Text';
        }

        function saveFile(shouldClose = true) {
            let content;
            if (isWysiwygMode && tinyMCEInstance) {
                // Get content from TinyMCE - use format: 'html' to get full HTML with fullpage plugin
                content = tinyMCEInstance.getContent({ format: 'html' });
            } else {
                // Get content from code editor
                content = codeMirrorEditor ? codeMirrorEditor.getValue() : document.getElementById('codeEditor').value;
            }

            showLoader();
            
            fetch(window.location.href, {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: 'action=save&path=' + encodeURIComponent(currentEditPath) + '&content=' + encodeURIComponent(content)
            })
            .then(response => response.json())
            .then(data => {
                hideLoader();
                if (data.success) {
                    updateEditorStatus('✅ Saved successfully');
                    if (shouldClose) {
                        setTimeout(() => {
                            closeModal('editorModal');
                            updateEditorStatus('Ready');
                        }, 500);
                    } else {
                        setTimeout(() => updateEditorStatus('Ready'), 2000);
                    }
                } else {
                    alert('Failed to save file');
                }
            })
            .catch(error => {
                hideLoader();
                alert('Error saving file');
            });
        }

        let tinyMCEInstance = null;

        function toggleWysiwyg() {
            const codeContainer = document.getElementById('editorContainer');
            const wysiwygContainer = document.getElementById('wysiwygContainer');
            const codeEditor = document.getElementById('codeEditor');

            if (isWysiwygMode) {
                // Switch to code mode - get content from TinyMCE and destroy it
                if (tinyMCEInstance) {
                    const htmlContent = tinyMCEInstance.getContent({ format: 'html' });
                    tinymce.remove('#wysiwygEditor');
                    tinyMCEInstance = null;

                    if (codeMirrorEditor) {
                        codeMirrorEditor.setValue(htmlContent);
                    } else {
                        codeEditor.value = htmlContent;
                    }
                }

                codeContainer.style.display = 'block';
                wysiwygContainer.style.display = 'none';
                isWysiwygMode = false;
                document.getElementById('wysiwygBtn').innerHTML = '<i class="fas fa-eye"></i> WYSIWYG';

                // Refresh CodeMirror after showing
                if (codeMirrorEditor) {
                    setTimeout(() => codeMirrorEditor.refresh(), 100);
                }
            } else {
                // Switch to WYSIWYG mode - initialize TinyMCE
                const codeContent = codeMirrorEditor ? codeMirrorEditor.getValue() : codeEditor.value;

                codeContainer.style.display = 'none';
                wysiwygContainer.style.display = 'block';
                isWysiwygMode = true;
                document.getElementById('wysiwygBtn').innerHTML = '<i class="fas fa-code"></i> Code';

                // Initialize TinyMCE 5 with comprehensive options including fullpage
                tinymce.init({
                    selector: '#wysiwygEditor',
                    height: '100%',
                    menubar: 'file edit view insert format tools table help',
                    menu: {
                        file: { title: 'File', items: 'newdocument restoredraft | preview | print | save' },
                        edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | searchreplace' },
                        view: { title: 'View', items: 'code visualaid visualblocks visualchars | spellchecker | preview fullscreen' },
                        insert: { title: 'Insert', items: 'image link media template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime' },
                        format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align lineheight | forecolor backcolor | language | removeformat' },
                        tools: { title: 'Tools', items: 'fullpage | spellchecker | a11ycheck | code wordcount' },
                        table: { title: 'Table', items: 'inserttable | cell row column | advtablerownumbering | tableprops deletetable' },
                        help: { title: 'Help', items: 'help' }
                    },
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'visualchars', 'code', 'fullscreen', 'fullpage',
                        'insertdatetime', 'media', 'table', 'help', 'wordcount',
                        'codesample', 'emoticons', 'template', 'pagebreak', 'nonbreaking',
                        'directionality', 'save', 'hr', 'imagetools', 'quickbars',
                        'autosave', 'importcss', 'print', 'paste', 'autoresize',
                        'noneditable', 'tabfocus', 'textpattern', 'toc'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic underline strikethrough | forecolor backcolor | ' +
                        'fontfamily fontsize | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'link image media table codesample | emoticons charmap hr pagebreak | ' +
                        'template toc | ltr rtl | nonbreaking anchor | removeformat | visualchars visualblocks | code fullscreen help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    font_family_formats: 'Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; Georgia=georgia,serif; Times New Roman=times new roman,times,serif; Verdana=verdana,geneva,sans-serif',
                    font_size_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
                    block_formats: 'Paragraph=p; Header 1=h1; Header 2=h2; Header 3=h3; Header 4=h4; Header 5=h5; Header 6=h6; Preformatted=pre',
                    fullpage_default_doctype: '<!DOCTYPE html>',
                    fullpage_hide_in_source_view: false,
                    extended_valid_elements: '*[*]',
                    valid_elements: '*[*]',
                    verify_html: false,
                    cleanup: false,
                    convert_urls: false,
                    remove_linebreaks: false,
                    entity_encoding: 'raw',
                    // Paste plugin options
                    paste_data_images: true,
                    paste_as_text: false,
                    paste_preprocess: function(plugin, args) {
                        // Allow all pasted content
                    },
                    paste_word_valid_elements: '*[*]',
                    paste_retain_style_properties: 'all',
                    paste_merge_formats: true,
                    // Autosave options
                    autosave_interval: '30s',
                    autosave_retention: '30m',
                    autosave_restore_when_empty: true,
                    // Autoresize options
                    autoresize_bottom_margin: 50,
                    min_height: 400,
                    max_height: 1000,
                    // Textpattern options (auto-formatting as you type)
                    textpattern_patterns: [
                        {start: '*', end: '*', format: 'italic'},
                        {start: '**', end: '**', format: 'bold'},
                        {start: '#', format: 'h1'},
                        {start: '##', format: 'h2'},
                        {start: '###', format: 'h3'},
                        {start: '####', format: 'h4'},
                        {start: '#####', format: 'h5'},
                        {start: '######', format: 'h6'},
                        {start: '1. ', cmd: 'InsertOrderedList'},
                        {start: '* ', cmd: 'InsertUnorderedList'},
                        {start: '- ', cmd: 'InsertUnorderedList'}
                    ],
                    // TOC options
                    toc_depth: 3,
                    toc_header: 'h2',
                    toc_class: 'table-of-contents',
                    // Image tools options
                    imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions',
                    // Quickbars
                    quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote | bullist numlist',
                    quickbars_insert_toolbar: 'quickimage quicktable | hr pagebreak',
                    // Context menu
                    contextmenu: 'link image table | spellchecker | inserttable cell row column deletetable',
                    // Save plugin callback
                    save_onsavecallback: function() {
                        saveFile(false); // Save but don't close
                    },
                    save_enablewhendirty: true,
                    setup: function(editor) {
                        editor.on('init', function() {
                            editor.setContent(codeContent);
                        });
                        tinyMCEInstance = editor;
                    }
                });
            }
        }

        function togglePreview() {
            const previewContainer = document.getElementById('previewContainer');
            const previewFrame = document.getElementById('previewFrame');
            
            if (!previewContainer || !previewFrame) {
                console.error('Preview elements not found');
                return;
            }
            
            if (showingPreview) {
                previewContainer.style.display = 'none';
                showingPreview = false;
            } else {
                let content;
                if (isWysiwygMode && tinyMCEInstance) {
                    content = tinyMCEInstance.getContent({ format: 'html' });
                } else {
                    content = codeMirrorEditor ? codeMirrorEditor.getValue() : document.getElementById('codeEditor').value;
                }

                previewFrame.srcdoc = content;
                previewContainer.style.display = 'block';
                showingPreview = true;
            }
        }

        function formatCode() {
            const ext = getFileExtension(currentEditPath).toLowerCase();
            
            if (ext === 'json') {
                try {
                    const currentContent = codeMirrorEditor ? codeMirrorEditor.getValue() : document.getElementById('codeEditor').value;
                    const formatted = JSON.stringify(JSON.parse(currentContent), null, 2);
                    
                    if (codeMirrorEditor) {
                        codeMirrorEditor.setValue(formatted);
                    } else {
                        document.getElementById('codeEditor').value = formatted;
                    }
                    
                    updateEditorStatus('JSON formatted');
                } catch (e) {
                    alert('Invalid JSON format');
                }
            } else {
                // Basic formatting for other types
                updateEditorStatus('Basic formatting applied');
            }
            
            setTimeout(() => updateEditorStatus('Ready'), 2000);
        }

        function updateEditorStatus(message = 'Ready') {
            document.getElementById('editorStatus').textContent = message;
        }
        
        // CodeMirror instance
        let codeMirrorEditor = null;
        
        // Initialize CodeMirror editor (fallback to v5)
        function initializeCodeMirror() {
            if (codeMirrorEditor) {
                return; // Already initialized
            }

            try {
                const textarea = document.getElementById('codeEditor');
                codeMirrorEditor = CodeMirror.fromTextArea(textarea, {
                    lineNumbers: true,
                    lineWrapping: true,
                    autoCloseBrackets: true,
                    matchBrackets: true,
                    styleActiveLine: true,
                    indentUnit: 4,
                    tabSize: 4,
                    mode: 'text/plain',
                    // Enable auto-completion
                    hintOptions: {
                        completeSingle: false,
                        alignWithWord: true,
                        closeOnUnfocus: true
                    },
                    // Enable match highlighting for selected text
                    highlightSelectionMatches: {
                        minChars: 2,
                        trim: true,
                        style: 'matchhighlight',
                        showToken: /\w|\$/,  // Highlight word characters and $ for PHP variables
                        annotateScrollbar: true
                    },
                    // Enable selection marking
                    styleSelectedText: true,
                    extraKeys: {
                        'Ctrl-S': function(cm) {
                            saveFile(false);
                        },
                        'Cmd-S': function(cm) {
                            saveFile(false);
                        },
                        'Ctrl-F': 'findPersistent',
                        'Cmd-F': 'findPersistent',
                        'Ctrl-H': 'replace',
                        'Cmd-Alt-F': 'replace',
                        // Auto-completion shortcuts
                        'Ctrl-Space': function(cm) {
                            console.log('Manual hint trigger (Ctrl-Space)');
                            cm.showHint();
                        },
                        'Alt-Space': function(cm) {
                            console.log('Manual hint trigger (Alt-Space)');
                            cm.showHint();
                        },
                        // Auto-trigger on typing for certain characters
                        '.': function(cm) {
                            cm.replaceSelection('.');
                            setTimeout(() => cm.showHint(), 100);
                            return true;
                        },
                        '$': function(cm) {
                            cm.replaceSelection('$');
                            setTimeout(() => cm.showHint(), 100);
                            return true;
                        }
                    }
                });

                // Set up auto-completion behavior
                codeMirrorEditor.on('inputRead', function(cm, change) {
                    if (change.origin === '+input') {
                        const text = change.text[0];
                        const cursor = cm.getCursor();
                        const line = cm.getLine(cursor.line);

                        // Get text before cursor
                        const beforeCursor = line.slice(0, cursor.ch);

                        // Check for word or $ pattern at end of line
                        const wordMatch = beforeCursor.match(/[$\w]+$/);
                        const currentWord = wordMatch ? wordMatch[0] : '';

                        // Check if we just typed $
                        const justTypedDollar = text === '$' || beforeCursor.endsWith('$');

                        const currentMode = cm.getOption('mode');
                        const isPhpMode = (typeof currentMode === 'object' && currentMode.name === 'php') ||
                                        (typeof currentMode === 'string' && currentMode === 'php');

                        console.log('Input:', text, 'Current word:', currentWord, 'Just typed $:', justTypedDollar);

                        // Auto-trigger hints
                        let shouldTrigger = false;

                        // Always trigger for $ in PHP mode
                        if (justTypedDollar && isPhpMode) {
                            console.log('Triggering PHP hints for $ character');
                            shouldTrigger = true;
                        }
                        // Trigger for PHP variables being typed
                        else if (currentWord.startsWith('$') && currentWord.length >= 2 && isPhpMode) {
                            console.log('Triggering hints for PHP variable:', currentWord);
                            shouldTrigger = true;
                        }
                        // Trigger for regular words
                        else if (currentWord.length >= 2 && !currentWord.startsWith('$')) {
                            console.log('Triggering hints for word:', currentWord);
                            shouldTrigger = true;
                        }

                        if (shouldTrigger) {
                            setTimeout(() => {
                                if (!cm.state.completionActive) {
                                    console.log('Showing hints...');
                                    cm.showHint();
                                }
                            }, 100);
                        }
                    }
                });

                // Set initial theme
                updateCodeMirrorTheme();

                // Auto-resize to fit container
                codeMirrorEditor.setSize('100%', '100%');

                console.log('CodeMirror editor initialized successfully (using v5 fallback with auto-completion)');
                return true;
            } catch (error) {
                console.error('Failed to initialize CodeMirror:', error);
                // Fallback: show the original textarea
                document.getElementById('codeEditor').style.display = 'block';
                return false;
            }
        }
        
        // Update CodeMirror theme to match file manager theme
        function updateCodeMirrorTheme(forcedTheme) {
            if (!codeMirrorEditor) return;

            const isDarkTheme = document.body.getAttribute('data-theme') === 'dark';
            const theme = forcedTheme || (isDarkTheme ? 'darcula' : 'default');

            codeMirrorEditor.setOption('theme', theme);
            console.log('CodeMirror theme set to:', theme);
        }
        
        // Get file mode for syntax highlighting
        function getCodeMirrorMode(filename) {
            const ext = getFileExtension(filename).toLowerCase();

            const modeMap = {
                'js': 'javascript',
                'jsx': 'javascript',
                'ts': 'javascript',
                'tsx': 'javascript',
                'json': {name: 'javascript', json: true},
                'css': 'css',
                'scss': 'text/x-scss',
                'sass': 'text/x-sass',
                'less': 'text/x-less',
                'html': 'htmlmixed',
                'htm': 'htmlmixed',
                'xml': 'xml',
                'svg': 'xml',
                'php': {name: 'php', startOpen: true},
                'py': 'python',
                'md': 'markdown',
                'markdown': 'markdown',
                'sql': 'sql',
                'sh': 'shell',
                'bash': 'shell',
                'yml': 'yaml',
                'yaml': 'yaml',
                'c': 'text/x-csrc',
                'cpp': 'text/x-c++src',
                'java': 'text/x-java',
                'txt': 'text/plain',
                'log': 'text/plain'
            };

            return modeMap[ext] || 'text/plain';
        }
        
        // Enable linting based on file type for CodeMirror 6
        function enableLintingForFileType(filename) {
            if (!codeMirrorEditor) return;

            const ext = filename.split('.').pop().toLowerCase();
            let lintEnabled = false;

            // Note: CodeMirror 6 linting requires different approach
            // For now, we'll disable linting and could add it back with proper CM6 lint extensions
            console.log('Linting configuration for extension:', ext);

            switch(ext) {
                case 'js':
                case 'jsx':
                    if (typeof JSHINT !== 'undefined') {
                        console.log('JSHINT available for JavaScript linting');
                        // TODO: Implement CodeMirror 6 linting with JSHINT
                        lintEnabled = false; // Disabled for now
                    }
                    break;
                case 'json':
                    if (typeof jsonlint !== 'undefined') {
                        console.log('JSONLint available for JSON linting');
                        // TODO: Implement CodeMirror 6 linting with JSONLint
                        lintEnabled = false; // Disabled for now
                    }
                    break;
                case 'css':
                case 'scss':
                case 'less':
                    if (typeof CSSLint !== 'undefined') {
                        console.log('CSSLint available for CSS linting');
                        // TODO: Implement CodeMirror 6 linting with CSSLint
                        lintEnabled = false; // Disabled for now
                    }
                    break;
                case 'html':
                case 'htm':
                    console.log('HTML linting not configured');
                    break;
                case 'php':
                    console.log('PHP syntax highlighting enabled (no linting)');
                    // Add basic client-side PHP syntax helpers
                    setupPHPSyntaxHelpers();
                    break;
                default:
                    console.log('No special linting for extension:', ext);
                    break;
            }

            if (lintEnabled) {
                updateEditorStatus('Linting enabled');
                setTimeout(() => updateEditorStatus('Ready'), 1000);
            } else {
                updateEditorStatus('Ready');
            }
        }
        
        function setupPHPSyntaxHelpers() {
            if (!codeMirrorEditor) return;

            // Basic client-side PHP syntax helpers for CodeMirror 6
            // Note: Full PHP syntax helpers would require more complex implementation
            // For now, we'll keep it simple since CM6 handles most basic editing features

            console.log('PHP syntax helpers initialized (simplified for CodeMirror 6)');

            // CodeMirror 6 handles most bracket matching automatically through basicSetup
            // Custom PHP-specific helpers could be added here if needed
        }
        
        
        // Set CodeMirror mode based on file type
        function setCodeMirrorMode(filename, forcedMode) {
            if (!codeMirrorEditor) return;

            try {
                const mode = forcedMode || getCodeMirrorMode(filename);
                const ext = getFileExtension(filename).toLowerCase();

                // Set the language mode
                if (typeof mode === 'string' && mode !== 'text/plain') {
                    codeMirrorEditor.setOption('mode', mode);
                    console.log('CodeMirror mode set to:', mode, 'for file:', filename);
                } else if (typeof mode === 'object') {
                    codeMirrorEditor.setOption('mode', mode);
                    console.log('CodeMirror mode set to:', mode, 'for file:', filename);
                } else {
                    codeMirrorEditor.setOption('mode', 'text/plain');
                    console.log('Using text/plain mode for:', filename);
                }

                // Set appropriate hint provider based on file type
                let hintFunction = CodeMirror.hint.anyword; // default

                if (ext === 'php') {
                    hintFunction = CodeMirror.hint.php;
                    console.log('Setting PHP hint function');
                } else if (['js', 'jsx', 'ts', 'tsx'].includes(ext)) {
                    hintFunction = CodeMirror.hint['javascript-enhanced'];
                } else if (['html', 'htm'].includes(ext)) {
                    hintFunction = CodeMirror.hint.html;
                } else if (['css', 'scss', 'sass', 'less'].includes(ext)) {
                    hintFunction = CodeMirror.hint.css;
                } else if (ext === 'sql') {
                    hintFunction = CodeMirror.hint.sql;
                }

                // Update hint options with the correct function
                codeMirrorEditor.setOption('hintOptions', {
                    completeSingle: false,
                    alignWithWord: true,
                    closeOnUnfocus: true,
                    hint: hintFunction || CodeMirror.hint.anyword
                });

                console.log('Auto-completion provider set for extension:', ext, 'function available:', !!hintFunction);

            } catch (error) {
                console.error('Error setting CodeMirror mode:', error);
                codeMirrorEditor.setOption('mode', 'text/plain');
            }
        }

        // Zip/Unzip functionality
        function zipSelected() {
            if (selectedItems.length === 0) {
                alert('Please select items to zip');
                return;
            }
            
            const zipName = prompt('Enter zip file name:', 'archive_' + Date.now() + '.zip');
            if (!zipName) return;
            
            showLoader();
            
            const paths = selectedItems.map(item => currentDir + '/' + item.name);
            
            fetch('zip_handler.php', {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: 'action=zip&paths=' + encodeURIComponent(JSON.stringify(paths)) + 
                      '&zipName=' + encodeURIComponent(zipName) + 
                      '&basePath=' + encodeURIComponent(currentDir)
            })
            .then(response => response.json())
            .then(data => {
                hideLoader();
                if (data.success) {
                    alert('Archive created successfully');
                    refreshList();
                    selectedItems = [];
                } else {
                    alert('Failed to create archive: ' + (data.error || 'Unknown error'));
                }
            })
            .catch(error => {
                hideLoader();
                alert('Error creating archive');
            });
        }

        function unzipSelected() {
            if (selectedItems.length !== 1 || !selectedItems[0].name.match(/\.(zip|rar|7z|tar|gz)$/i)) {
                alert('Please select a single archive file to extract');
                return;
            }
            
            const destination = prompt('Extract to directory (leave empty for current directory):');
            
            showLoader();
            
            const zipPath = currentDir + '/' + selectedItems[0].name;
            const extractPath = destination ? currentDir + '/' + destination : currentDir;
            
            fetch('zip_handler.php', {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: 'action=unzip&zipPath=' + encodeURIComponent(zipPath) + 
                      '&extractPath=' + encodeURIComponent(extractPath)
            })
            .then(response => response.json())
            .then(data => {
                hideLoader();
                if (data.success) {
                    alert('Archive extracted successfully');
                    refreshList();
                    selectedItems = [];
                } else {
                    alert('Failed to extract archive: ' + (data.error || 'Unknown error'));
                }
            })
            .catch(error => {
                hideLoader();
                alert('Error extracting archive');
            });
        }
        
        console.log('JavaScript file parsing completed successfully - all functions loaded');
    </script>
    
    <!-- Fallback to CodeMirror 5 for compatibility -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/xml/xml.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/javascript/javascript.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/css/css.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/htmlmixed/htmlmixed.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/php/php.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/markdown/markdown.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/sql/sql.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/clike/clike.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/addon/edit/closebrackets.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/addon/edit/matchbrackets.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/addon/selection/active-line.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/addon/search/searchcursor.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/addon/search/search.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/addon/dialog/dialog.min.js"></script>

    <!-- Hint/Autocomplete support -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/addon/hint/show-hint.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/addon/hint/javascript-hint.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/addon/hint/html-hint.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/addon/hint/css-hint.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/addon/hint/sql-hint.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/addon/hint/anyword-hint.min.js"></script>

    <!-- Selection and Match Highlighting -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/addon/selection/mark-selection.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/addon/search/match-highlighter.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/addon/search/matchesonscrollbar.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/addon/scroll/annotatescrollbar.min.js"></script>

    <script>
        // CodeMirror 6 fallback indicator
        window.CodeMirror6 = null;
        // Note: Using CodeMirror 5 (console messages only visible with ?debug=1)

        // Custom PHP hint function
        CodeMirror.registerHelper("hint", "php", function(editor, options) {
            console.log('PHP hint function called');  // Debug only

            const cursor = editor.getCursor();
            const line = editor.getLine(cursor.line);
            const start = cursor.ch;
            let end = cursor.ch;

            // Find the start of the current word (including $)
            let wordStart = start;
            while (wordStart > 0 && /[\w$]/.test(line.charAt(wordStart - 1))) {
                wordStart--;
            }

            const currentWord = line.slice(wordStart, end);
            console.log('Current word for PHP hints:', currentWord);

            // Don't require minimum length for $ character
            if (currentWord.length < 1 && currentWord !== '$') {
                console.log('Word too short, no hints');
                return null;
            }

            const suggestions = [];
            const content = editor.getValue();

            // Extract PHP variables from the document
            const variableMatches = content.match(/\$[a-zA-Z_][a-zA-Z0-9_]*/g) || [];
            const uniqueVars = [...new Set(variableMatches)];
            console.log('Found variables:', uniqueVars);

            // Extract function names
            const functionMatches = content.match(/function\s+([a-zA-Z_][a-zA-Z0-9_]*)/g) || [];
            const functions = functionMatches.map(f => f.replace('function ', ''));
            console.log('Found functions:', functions);

            // Common PHP functions and superglobals
            const phpItems = [
                // Superglobals
                '$_GET', '$_POST', '$_SESSION', '$_COOKIE', '$_SERVER', '$_FILES', '$_ENV', '$_REQUEST', '$GLOBALS',
                // Common functions
                'echo', 'print', 'var_dump', 'print_r', 'var_export',
                'strlen', 'substr', 'strpos', 'strrpos', 'str_replace', 'str_ireplace',
                'explode', 'implode', 'trim', 'ltrim', 'rtrim',
                'strtolower', 'strtoupper', 'ucfirst', 'ucwords', 'lcfirst',
                'is_array', 'is_string', 'is_numeric', 'is_int', 'is_float', 'is_bool', 'is_null', 'is_object',
                'isset', 'empty', 'unset',
                'count', 'sizeof', 'array_keys', 'array_values', 'array_merge', 'array_push', 'array_pop', 'array_shift', 'array_unshift',
                'file_get_contents', 'file_put_contents', 'file_exists', 'is_file', 'is_dir',
                'mysqli_connect', 'mysqli_query', 'mysqli_fetch_assoc', 'mysqli_close',
                'date', 'time', 'mktime', 'strtotime', 'microtime',
                'header', 'session_start', 'session_destroy', 'session_id',
                'define', 'defined', 'constant',
                'include', 'require', 'include_once', 'require_once'
            ];

            // Add variables
            uniqueVars.forEach(variable => {
                // Show all variables if just typed $, or filter if typing more
                if (currentWord === '$' ||
                    currentWord === '' ||
                    variable.toLowerCase().indexOf(currentWord.toLowerCase()) === 0) { // Changed to startsWith (===0)
                    suggestions.push({
                        text: variable,
                        displayText: variable + ' (variable)',
                        className: 'cm-variable-hint'
                    });
                }
            });

            // Add custom functions
            functions.forEach(func => {
                // Only show functions if not typing a variable
                if (!currentWord.startsWith('$') &&
                    (currentWord === '' || func.toLowerCase().indexOf(currentWord.toLowerCase()) === 0)) {
                    suggestions.push({
                        text: func + '()',
                        displayText: func + '() (function)',
                        className: 'cm-function-hint'
                    });
                }
            });

            // Add PHP built-ins and superglobals
            phpItems.forEach(item => {
                const isVariable = item.startsWith('$');
                const isSuperglobal = item.startsWith('$_');

                // Show variables if typing $, functions if not
                const shouldShow = (currentWord === '$' && isVariable) ||
                                 (currentWord.startsWith('$') && isVariable && item.toLowerCase().indexOf(currentWord.toLowerCase()) === 0) ||
                                 (!currentWord.startsWith('$') && !isVariable && item.toLowerCase().indexOf(currentWord.toLowerCase()) === 0) ||
                                 (currentWord === '');

                if (shouldShow) {
                    const displayType = isSuperglobal ? 'superglobal' : (isVariable ? 'variable' : 'function');

                    suggestions.push({
                        text: item,
                        displayText: item + ' (PHP ' + displayType + ')',
                        className: isVariable ? 'cm-variable-hint' : 'cm-builtin-hint'
                    });
                }
            });

            console.log('PHP suggestions:', suggestions.length);

            if (suggestions.length === 0) {
                return null;
            }

            return {
                list: suggestions.slice(0, 20), // Limit to 20 suggestions
                from: CodeMirror.Pos(cursor.line, wordStart),
                to: CodeMirror.Pos(cursor.line, end)
            };
        });

        // Enhanced anyword hint for other languages
        CodeMirror.registerHelper("hint", "anyword-enhanced", function(editor, options) {
            const cursor = editor.getCursor();
            const line = editor.getLine(cursor.line);
            const start = cursor.ch;
            let end = cursor.ch;

            // Find the start of the current word
            let wordStart = start;
            while (wordStart > 0 && /[\w$]/.test(line.charAt(wordStart - 1))) {
                wordStart--;
            }

            const currentWord = line.slice(wordStart, end);
            if (currentWord.length < 2) return null;

            const content = editor.getValue();
            const words = content.match(/\b\w{2,}\b/g) || [];
            const uniqueWords = [...new Set(words)];

            const suggestions = uniqueWords
                .filter(word => word.toLowerCase().includes(currentWord.toLowerCase()) && word !== currentWord)
                .map(word => ({
                    text: word,
                    displayText: word + ' (from document)',
                    className: 'cm-word-hint'
                }));

            return {
                list: suggestions.slice(0, 20), // Limit to 20 suggestions
                from: CodeMirror.Pos(cursor.line, wordStart),
                to: CodeMirror.Pos(cursor.line, end)
            };
        });

        // JavaScript-specific hints
        CodeMirror.registerHelper("hint", "javascript-enhanced", function(editor, options) {
            const cursor = editor.getCursor();
            const line = editor.getLine(cursor.line);
            const start = cursor.ch;
            let end = cursor.ch;

            let wordStart = start;
            while (wordStart > 0 && /[\w$]/.test(line.charAt(wordStart - 1))) {
                wordStart--;
            }

            const currentWord = line.slice(wordStart, end);
            const suggestions = [];

            // Extract JavaScript variables and functions
            const content = editor.getValue();
            const varMatches = content.match(/(?:var|let|const)\s+([a-zA-Z_][a-zA-Z0-9_]*)/g) || [];
            const variables = varMatches.map(v => v.replace(/(var|let|const)\s+/, ''));

            const funcMatches = content.match(/function\s+([a-zA-Z_][a-zA-Z0-9_]*)/g) || [];
            const functions = funcMatches.map(f => f.replace('function ', ''));

            // JavaScript built-ins
            const jsBuiltins = [
                'console.log', 'console.error', 'console.warn', 'console.info',
                'document.getElementById', 'document.querySelector', 'document.querySelectorAll',
                'window.alert', 'window.confirm', 'window.prompt', 'window.location',
                'Array', 'Object', 'String', 'Number', 'Boolean', 'Date', 'Math', 'JSON',
                'parseInt', 'parseFloat', 'isNaN', 'isFinite', 'typeof', 'instanceof',
                'setTimeout', 'setInterval', 'clearTimeout', 'clearInterval'
            ];

            // Add variables
            variables.forEach(variable => {
                if (variable.toLowerCase().includes(currentWord.toLowerCase())) {
                    suggestions.push({
                        text: variable,
                        displayText: variable + ' (variable)',
                        className: 'cm-variable-hint'
                    });
                }
            });

            // Add functions
            functions.forEach(func => {
                if (func.toLowerCase().includes(currentWord.toLowerCase())) {
                    suggestions.push({
                        text: func + '()',
                        displayText: func + '() (function)',
                        className: 'cm-function-hint'
                    });
                }
            });

            // Add built-ins
            jsBuiltins.forEach(builtin => {
                if (builtin.toLowerCase().includes(currentWord.toLowerCase())) {
                    suggestions.push({
                        text: builtin,
                        displayText: builtin + ' (JavaScript built-in)',
                        className: 'cm-builtin-hint'
                    });
                }
            });

            return {
                list: suggestions,
                from: CodeMirror.Pos(cursor.line, wordStart),
                to: CodeMirror.Pos(cursor.line, end)
            };
        });
    </script>

    <!-- Keep external linting libraries -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jshint/2.13.6/jshint.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/csslint/1.0.5/csslint.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jsonlint/1.6.0/jsonlint.min.js"></script>
</body>
</html>
