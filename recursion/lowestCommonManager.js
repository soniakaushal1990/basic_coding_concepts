function getLowestCommonManager(topManager, reportOne, reportTwo) {
    return getOrgInfo(topManager,reportOne,reportTwo).lowestCommonManager;
  }
  
  function getOrgInfo(manager,reportOne,reportTwo){
      let numImportantReports=0;
      for(const directReport of manager.directReports){
          const orgInfo=getOrgInfo(directReport,reportOne,reportTwo);
          console.log(orgInfo);
          if(!!orgInfo.lowestCommonManager) return orgInfo;
          numImportantReports += orgInfo.numImportantReports;
      }
      if(manager === reportOne || manager === reportTwo) numImportantReports++;
      const lowestCommonManager = numImportantReports === 2 ? manager : null;
      return {lowestCommonManager,numImportantReports};
  }

  
  
  class OrgChart {
    constructor(name) {
      this.name = name;
      this.directReports = [];
    }
  
    addDirectReports(directReports) {
      for (const directReport of directReports) {
        this.directReports.push(directReport);
      }
    }
  }
  
  function getOrgCharts() {
    const orgCharts = {};
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    for (const letter of ALPHABET) {
      orgCharts[letter] = new OrgChart(letter);
    }
    return orgCharts;
  }
const orgCharts = getOrgCharts();
orgCharts['A'].addDirectReports([orgCharts['B'], orgCharts['C']]);
orgCharts['B'].addDirectReports([orgCharts['D'], orgCharts['E']]);
orgCharts['C'].addDirectReports([orgCharts['F'], orgCharts['G']]);
orgCharts['D'].addDirectReports([orgCharts['H'], orgCharts['I']]);  
const lcm = getLowestCommonManager(orgCharts.A, orgCharts.E, orgCharts.I);
console.log(lcm);

