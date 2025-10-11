// RF Learning Hub - Storage Management
// Handles all localStorage operations across the application

const Storage = {
    // Module Progress
    getModuleStatus: function(moduleId) {
        return localStorage.getItem(`module_${moduleId}`) === 'true';
    },
    
    setModuleStatus: function(moduleId, completed) {
        localStorage.setItem(`module_${moduleId}`, completed);
        this.addActivity(`Module ${moduleId} ${completed ? 'completed' : 'unchecked'}`);
    },
    
    getCompletedModules: function() {
        const completed = [];
        for (let i = 1; i <= 26; i++) {
            if (this.getModuleStatus(i)) {
                completed.push(i);
            }
        }
        return completed;
    },
    
    // Measurements
    getMeasurements: function() {
        return JSON.parse(localStorage.getItem('measurements') || '[]');
    },
    
    addMeasurement: function(measurement) {
        const measurements = this.getMeasurements();
        measurement.id = Date.now();
        measurement.date = new Date().toISOString();
        measurements.push(measurement);
        localStorage.setItem('measurements', JSON.stringify(measurements));
        this.addActivity('Added new measurement: ' + measurement.type);
        return measurement;
    },
    
    deleteMeasurement: function(id) {
        const measurements = this.getMeasurements();
        const filtered = measurements.filter(m => m.id !== id);
        localStorage.setItem('measurements', JSON.stringify(filtered));
    },
    
    // Lab Notebook
    getNotebookEntries: function() {
        return JSON.parse(localStorage.getItem('labNotebook') || '[]');
    },
    
    addNotebookEntry: function(entry) {
        const entries = this.getNotebookEntries();
        entry.id = Date.now();
        entry.date = new Date().toISOString();
        entries.unshift(entry); // Add to beginning
        localStorage.setItem('labNotebook', JSON.stringify(entries));
        this.addActivity('Added lab notebook entry: ' + entry.title);
        return entry;
    },
    
    deleteNotebookEntry: function(id) {
        const entries = this.getNotebookEntries();
        const filtered = entries.filter(e => e.id !== id);
        localStorage.setItem('labNotebook', JSON.stringify(filtered));
    },
    
    // Projects
    getProjects: function() {
        return JSON.parse(localStorage.getItem('projects') || '[]');
    },
    
    addProject: function(project) {
        const projects = this.getProjects();
        project.id = Date.now();
        project.createdDate = new Date().toISOString();
        projects.push(project);
        localStorage.setItem('projects', JSON.stringify(projects));
        this.addActivity('Created project: ' + project.name);
        return project;
    },
    
    updateProject: function(id, updates) {
        const projects = this.getProjects();
        const index = projects.findIndex(p => p.id === id);
        if (index !== -1) {
            projects[index] = { ...projects[index], ...updates };
            localStorage.setItem('projects', JSON.stringify(projects));
        }
    },
    
    // Gallery
    getGalleryItems: function() {
        return JSON.parse(localStorage.getItem('gallery') || '[]');
    },
    
    addGalleryItem: function(item) {
        const gallery = this.getGalleryItems();
        item.id = Date.now();
        item.uploadDate = new Date().toISOString();
        gallery.push(item);
        localStorage.setItem('gallery', JSON.stringify(gallery));
        this.addActivity('Added photo to gallery: ' + item.caption);
        return item;
    },
    
    deleteGalleryItem: function(id) {
        const gallery = this.getGalleryItems();
        const filtered = gallery.filter(item => item.id !== id);
        localStorage.setItem('gallery', JSON.stringify(filtered));
    },
    
    // RF Map Data
    getRFMapData: function() {
        return JSON.parse(localStorage.getItem('rfMapData') || '[]');
    },
    
    addRFMapEntry: function(entry) {
        const mapData = this.getRFMapData();
        entry.id = Date.now();
        entry.timestamp = new Date().toISOString();
        mapData.push(entry);
        localStorage.setItem('rfMapData', JSON.stringify(mapData));
        this.addActivity(`Logged signal at ${entry.frequency} MHz`);
        return entry;
    },
    
    // Activity Tracking
    getRecentActivity: function() {
        return JSON.parse(localStorage.getItem('recentActivity') || '[]');
    },
    
    addActivity: function(description) {
        const activity = this.getRecentActivity();
        activity.unshift({
            timestamp: new Date().toISOString(),
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            description: description
        });
        // Keep only last 50 activities
        localStorage.setItem('recentActivity', JSON.stringify(activity.slice(0, 50)));
    },
    
    // Export/Import
    exportAllData: function() {
        const data = {
            version: '2.0',
            exportDate: new Date().toISOString(),
            modules: {},
            measurements: this.getMeasurements(),
            notebook: this.getNotebookEntries(),
            projects: this.getProjects(),
            gallery: this.getGalleryItems(),
            rfMap: this.getRFMapData(),
            activity: this.getRecentActivity()
        };
        
        // Get all module states
        for (let i = 1; i <= 26; i++) {
            data.modules[i] = this.getModuleStatus(i);
        }
        
        return data;
    },
    
    importData: function(data) {
        try {
            // Import modules
            if (data.modules) {
                Object.entries(data.modules).forEach(([moduleId, completed]) => {
                    localStorage.setItem(`module_${moduleId}`, completed);
                });
            }
            
            // Import other data
            if (data.measurements) localStorage.setItem('measurements', JSON.stringify(data.measurements));
            if (data.notebook) localStorage.setItem('labNotebook', JSON.stringify(data.notebook));
            if (data.projects) localStorage.setItem('projects', JSON.stringify(data.projects));
            if (data.gallery) localStorage.setItem('gallery', JSON.stringify(data.gallery));
            if (data.rfMap) localStorage.setItem('rfMapData', JSON.stringify(data.rfMap));
            if (data.activity) localStorage.setItem('recentActivity', JSON.stringify(data.activity));
            
            this.addActivity('Data imported successfully');
            return true;
        } catch (error) {
            console.error('Import error:', error);
            return false;
        }
    },
    
    // Clear all data
    clearAllData: function() {
        if (confirm('Are you sure you want to clear ALL data? This cannot be undone!')) {
            const keys = Object.keys(localStorage);
            keys.forEach(key => {
                if (key.startsWith('module_') || 
                    ['measurements', 'labNotebook', 'projects', 'gallery', 'rfMapData', 'recentActivity'].includes(key)) {
                    localStorage.removeItem(key);
                }
            });
            this.addActivity('All data cleared');
            return true;
        }
        return false;
    }
};