// Đường dẫn API chuẩn đã kiểm chứng (đã trả về dữ liệu JSON)
const API_URL = "https://6a3a7bba917c7b14c74d967e.mockapi.io/workouts";

/**
 * Hàm lấy danh sách buổi tập từ MockAPI
 */
async function getWorkouts() {
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Dữ liệu nhận được:", data);
        return data; 
    } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
        // Trả về mảng rỗng để web không bị treo nếu lỗi
        return [];
    }
}

// Gọi hàm để kiểm tra dữ liệu ngay khi tải trang
getWorkouts().then(workouts => {
    const listContainer = document.getElementById('workout-list'); // Thay ID này bằng ID thực tế trong file HTML của bạn
    if (listContainer) {
        if (workouts.length === 0) {
            listContainer.innerHTML = "<p>Danh sách bài tập hiện đang trống.</p>";
        } else {
            // Code hiển thị danh sách của bạn ở đây
        }
    }
});