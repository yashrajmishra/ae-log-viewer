const { dialog, shell, Menu } = require('electron');

const template = [
    {
        label: 'File',
        submenu: [
            {
                role: 'quit'
            }
        ]
    },
    {
        label: 'Edit',
        submenu: [
            { 
                label: 'Undo', 
                accelerator: 'CmdOrCtrl+Z', 
                role: 'undo'
            },
            { 
                label: 'Redo', 
                accelerator: 'CmdOrCtrl+Y', 
                role: 'redo'
            },
            { 
                type: "separator" 
            },
            { 
                label: 'Cut', 
                accelerator: 'CmdOrCtrl+X', 
                role: 'cut'
            },
            { 
                label: 'Copy', 
                accelerator: 'CmdOrCtrl+C', 
                role: 'copy'
            },
            { 
                label: 'Paste', 
                accelerator: 'CmdOrCtrl+V', 
                role: 'paste'
            },
            {
                label: 'Select All',
                accelerator: 'CmdOrCtrl+A',
                role: 'selectAll'
            }
        ]
    },
    {
        label: 'Help',
        submenu: [
            {
                label: 'Visit Us',
                click: () => { 
                    shell.openExternal('https://amitelectric.in');
                }
            },
            {
                type: 'separator'
            },
            {
                label: 'About',
                click: () => { 
                    dialog.showMessageBox({
                        type: "info",
                        title: "About",
                        buttons: ["OK"],
                        message: "Amit Electric Viewer",
                        detail: "Made with ❤️ by Yashraj Mishra"
                    });
                }
            }
        ]
    }
];

Menu.setApplicationMenu(Menu.buildFromTemplate(template));