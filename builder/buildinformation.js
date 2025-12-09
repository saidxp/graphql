export function buildinformation(data) {
    let userInfo = data[0]
    buildProjectsTable(userInfo.finished_projects)
    const infoDiv = document.getElementById('Info');
    infoDiv.innerHTML = '';
    infoDiv.innerHTML = `
        <div class="info-item">
            <span class="info-label">Full Name:</span>
            <span class="info-value">${userInfo.firstName} ${userInfo.lastName}</span>
        </div>
        
        <div class="info-item">
            <span class="info-label">Login:</span>
            <span class="info-value">${userInfo.login}</span>
        </div>
        
        <div class="info-item">
            <span class="info-label">Email:</span>
            <span class="info-value">${userInfo.email}</span>
        </div>
        
        <div class="info-item">
            <span class="info-label">Audit Ratio:</span>
            <span class="info-value">${userInfo.auditRatio.toFixed(2)}</span>
        </div>
        
        <div class="info-item">
            <span class="info-label">Total Up:</span>
            <span class="info-value">${(userInfo.totalUp / 1000000).toFixed(2)} MB</span>
        </div>
        
        <div class="info-item">
            <span class="info-label">Total Down:</span>
            <span class="info-value">${(userInfo.totalDown / 1000000).toFixed(2)} MB</span>
        </div>
        
        <div class="info-item">
            <span class="info-label">Finished Projects:</span>
            <span class="info-value">${userInfo.finished_projects.length}</span>
        </div>
    `;
}

export function buildProjectsTable(finished_projects) { 
    const container = document.getElementById("project");
    container.innerHTML = ""; // clear old table if it exists  
    const h = document.createElement('h2');
    h.innerText = "Projects";
    h.className = "pj";

    const tableWrapper = document.createElement("div");
    tableWrapper.className = "table-wrapper";
    tableWrapper.appendChild(h) 
    if (finished_projects.length > 20) {  
        tableWrapper.style.height = "1200px";
        tableWrapper.style.overflowY = "auto";
       
    }
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = ["#", "Project Name", "Group Members"];
    
    headers.forEach(title => {
      const th = document.createElement("th");
      th.textContent = title;
      headerRow.appendChild(th);
    }); 
    // < >
    thead.appendChild(headerRow);
    table.appendChild(thead);  
    // Create-Body !! 
    const tbody = document.createElement("tbody");
    // Fill-Rows !!
    finished_projects.forEach((project, i) => {
      const tr = document.createElement("tr");
      const tdNum = document.createElement("td");
      tdNum.textContent = i + 1;
      tdNum.className = "td-number";
      tr.appendChild(tdNum);
      const tdPath = document.createElement("td");
      const pathParts = project.group.path.split('/');
      const projectName = pathParts[3] || project.group.path;  
      tdPath.textContent = projectName;
      tdPath.className = "td-path";
      tr.appendChild(tdPath);

      const tdMembers = document.createElement("td");
      const members = project.group.members.map(m => m.userLogin).join(", ");
      tdMembers.textContent = members;
      tdMembers.className = "td-members";
      tr.appendChild(tdMembers);  
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    tableWrapper.appendChild(table);
    container.appendChild(tableWrapper);
}