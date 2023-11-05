<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();
</script>

{#if $modalStore[0]}
	<div class="card w-modal-wide p-4">
		<header class="card-header">
			{#if $modalStore[0].title}
				{$modalStore[0].title}
			{:else}
				<h3 class="h3">Enter a New Application</h3>
			{/if}
		</header>
		<section class="p-4">
			<form>
				<label class="label">
					<span>Role</span>
					<input class="input" title="Role" type="text" placeholder="Name of role" />
				</label>
				<label class="label">
					<span>Company</span>
					<input class="input" title="Company" type="text" placeholder="Name of company" />
				</label>
				<label class="label">
					<span>Status</span>
					<select class="select">
						<option value="Applied">Applied</option>
						<option value="Rejected">Rejected</option>
						<option value="Ghosted">Ghosted</option>
					</select>
				</label>
				<label class="label">
					<span>Application Date</span>
					<input class="input" title="Application Date" type="datetime-local" />
				</label>
				<label>
					<span>Last Update</span>
					<input class="input" title="Last Updated" type="datetime-local" />
				</label>
			</form>
		</section>
		<footer class="card-footer">
			<div class="btn-group variant-filled">
				<button class="variant-filled-warning" on:click={() => modalStore.close()}>Close</button>
				<button class="variant-filled-success">Save</button>
			</div>
		</footer>
	</div>
{/if}
