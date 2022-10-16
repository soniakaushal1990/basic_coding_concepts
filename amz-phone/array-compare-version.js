var compareVersion = function(version1, version2) {
    let nums1= version1.split('.');
    let nums2 = version2.split('.');
    let n1 = nums1.length;
    let n2 = nums2.length;
    let len = Math.max(n1,n2);
    for(let i=0;i<len;i++){
        let t1= parseInt(nums1[i]) || 0;
        let t2=parseInt(nums2[i]) || 0;
        if(t1 > t2) return 1;
        if(t1 < t2) return -1;
    }
    return 0;
};