        function createCalendar(year, month, highlightDate) {
            const calendarTable = document.getElementById("calendar");
            const currentDate = new Date();
            const today = currentDate.getDate();

            currentDate.setFullYear(year, month, 1);
            const firstDay = currentDate.getDay();
            currentDate.setFullYear(year, month + 1, 0);
            const lastDate = currentDate.getDate();

            let calendarHTML = '<tr>';
            for (let i = 0; i < firstDay; i++) {
                calendarHTML += '<td></td>';
            }

            for (let i = 1; i <= lastDate; i++) {
                let cellClass = '';
                if (i === today && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
                    cellClass = 'highlight-today';
                }
                if (i === highlightDate) {
                    cellClass = 'highlight-custom';
                }

                calendarHTML += `<td class="${cellClass}">${i}</td>`;

                if ((i + firstDay) % 7 === 0) {
                    calendarHTML += '</tr><tr>';
                }
            }

            calendarHTML += '</tr>';
            calendarTable.innerHTML = calendarHTML;
        }

        function resetCalendar() {
            const month = document.getElementById("month").value;
            const year = document.getElementById("year").value;
            const customDate = document.getElementById("customDate").value;
            const highlightDate = customDate ? new Date(customDate).getDate() : null;
            createCalendar(year, month, highlightDate);
        }

        const currentDate = new Date();
        let initialMonth = currentDate.getMonth();
        let initialYear = currentDate.getFullYear();
        createCalendar(initialYear, initialMonth, currentDate.getDate());

        document.getElementById("month").addEventListener("change", () => {
            resetCalendar();
        });

        document.getElementById("year").addEventListener("change", () => {
            resetCalendar();
        });