/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/92334
 */

function solution(id_list, report_list, k) {
  var answer = [];

  const sortedReportList = {};
  const reportedCount = {};
  for (const name of id_list) {
    sortedReportList[name] = [];
    reportedCount[name] = 0;
  }
  const stops = [];
  for (const report of report_list) {
    const set = report.split(' ');
    const reporter = set[0];
    const reported = set[1];
    if (!sortedReportList[reporter].includes(reported)) {
      sortedReportList[reporter].push(reported);
      reportedCount[reported] += 1;
      if (reportedCount[reported] >= k && !stops.includes(reported)) {
        stops.push(reported);
      }
    }
  }

  for (const [key, value] of Object.entries(sortedReportList)) {
    let count = 0;
    for (const stop of stops) {
      if (value.includes(stop)) {
        count++;
      }
    }
    answer.push(count);
  }

  return answer;
}
