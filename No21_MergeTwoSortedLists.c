/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2) {
    struct ListNode *cursor1, *cursor2;
    int temp, swapflag = 1;
    if (list1 == NULL && list2 == NULL)
        return NULL;
    else if (list1 && list2 == NULL)
        return list1;
    else if (list2 && list1 == NULL)
        return list2;

    /* Merging both lists (unsorted) */
    cursor1 = list1;
    while (cursor1->next)
      cursor1 = cursor1->next;
    cursor1->next = list2;

    /* Sorting the merged list using bubble sort */
    while (swapflag)
    {
      swapflag = 0;
      cursor1 = list1;
      cursor2 = cursor1->next;
      while(cursor2)
      {
        if (cursor1->val > cursor2->val)
        {
          temp = cursor1->val;
          cursor1->val = cursor2->val;
          cursor2->val = temp;
          swapflag = 1;
        }
        cursor1 = cursor2;
        cursor2 = cursor2->next;
      }
    }
    return (list1);
}
